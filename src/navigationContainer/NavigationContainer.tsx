import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NavigationContainer as NativeNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore
import { ASYNC_STORAGE_KEYS, USER_ROLE_TYPE } from 'constants';
import request from 'utils/request';
import SplashScreen from 'features/authentication/SplashScreen';
import { ReturnedUser, useUserProfileLazyQuery } from 'generated/graphql';
import { useDispatch } from 'react-redux';
import { userProfile } from 'store/actions/user.actions';
import { enableScreens } from 'react-native-screens';
import { View } from 'react-native';
import { NavigationStack } from './navigation';

enableScreens(true);
const Stack = createStackNavigator<NavigationStack>();

export default function NavigationContainer() {
  const [initialRoute, setInitialRoute] = useState<navigationRouteNames>(
    navigationRouteNames.AuthScreen,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadUserProfile, userProfileResponse] = useUserProfileLazyQuery();
  const dispatch = useDispatch();
  const getAuthToken = async () => {
    try {
      const authToken = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.AUTH_TOKEN,
      );
      if (authToken !== null) {
        request.token = authToken;
        loadUserProfile();
      } else {
        setIsLoading(false);
      }
    } catch (_e) {
      console.log('e getAuthToken', _e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) setIsLoading(true);
    if (userProfileResponse.called && !userProfileResponse.loading) {
      if (userProfileResponse.data?.user?.email) {
        dispatch(
          userProfile({
            token: request.token,
            ...userProfileResponse.data.user,
          } as ReturnedUser),
        );
        setInitialRoute(navigationRouteNames.PublicLedgerScreen);
      } else if (
        userProfileResponse.error ||
        (userProfileResponse.called && !userProfileResponse.data)
      ) {
        setInitialRoute(navigationRouteNames.AuthScreen);
      }
      setIsLoading(false);
    }
  }, [userProfileResponse.loading]);

  useEffect(() => {
    getAuthToken();
  }, []);

  const BottomTab =
    navigationRouteComponentMap[navigationRouteNames.BottomTabNavigation];

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NativeNavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute as any}>
        <Stack.Screen
          name={navigationRouteNames.AuthScreen}
          component={
            navigationRouteComponentMap[navigationRouteNames.AuthScreen]
          }
        />
        <Stack.Screen
          name={navigationRouteNames.UserProfileScreen}
          component={
            navigationRouteComponentMap[navigationRouteNames.UserProfileScreen]
          }
        />
        <Stack.Screen
          name={navigationRouteNames.PublicLedgerScreen}
          // eslint-disable-next-line react/no-children-prop
          children={() => (
            <BottomTab
              isAdmin={
                userProfileResponse.data?.user.role === USER_ROLE_TYPE.ADMIN
              }
            />
          )}
        />
        <Stack.Screen
          name={navigationRouteNames.MyBlockScreen}
          component={
            navigationRouteComponentMap[navigationRouteNames.MyBlockScreen]
          }
          initialParams={{ block: undefined, showShare: true }}
        />
      </Stack.Navigator>
    </NativeNavigationContainer>
  );
}
