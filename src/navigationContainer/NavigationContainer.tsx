import React, { useEffect, useState } from 'react';
import { NavigationContainer as NativeNavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import navigationRouteComponentMap from 'navigationContainer/navigationRouteComponentMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore
import { ASYNC_STORAGE_KEYS } from 'constants';
import request from 'utils/request';
import SplashScreen from 'features/authentication/SplashScreen';
import { ReturnedUser, useUserProfileLazyQuery } from 'generated/graphql';
import { useDispatch } from 'react-redux';
import { userProfile } from 'store/actions/user.actions';
import { NavigationStack } from './navigation';

const Stack = createStackNavigator<NavigationStack>();

export default function NavigationContainer() {
  const [initialRoute, setInitalRoute] = useState<navigationRouteNames>(
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
        setTimeout(() => setIsLoading(false), 3000);
      }
    } catch (_e) {
      console.log('e getAuthToken', _e);
      setTimeout(() => setIsLoading(false), 3000);
    }
  };

  useEffect(() => {
    console.log('userProfileResponse', userProfileResponse);
    if (
      !userProfileResponse.loading
      && !userProfileResponse.error
      && userProfileResponse.data?.user?.email) {
      dispatch(userProfile({
        token: request.token,
        ...userProfileResponse.data.user,
      } as ReturnedUser));
      setIsLoading(false);
      setInitalRoute(navigationRouteNames.PublicLedgerScreen);
    } else if (userProfileResponse.error) {
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [userProfileResponse]);

  useEffect(() => {
    getAuthToken();
  }, []);

  console.log('initialRoute', initialRoute, isLoading);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NativeNavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute as any}
      >
        <Stack.Screen
          name={navigationRouteNames.AuthScreen}
          component={
                navigationRouteComponentMap[
                  navigationRouteNames.AuthScreen
                ]
              }
        />
        <Stack.Screen
          name={navigationRouteNames.PrivateKeyDownloadScreen}
          component={
                navigationRouteComponentMap[
                  navigationRouteNames.PrivateKeyDownloadScreen
                ]
              }
        />
        <Stack.Screen
          name={navigationRouteNames.PublicLedgerScreen}
          component={
              navigationRouteComponentMap[
                navigationRouteNames.BottomTabNavigation
              ]
            }
        />
        <Stack.Screen
          name={navigationRouteNames.UserProfileScreen}
          component={
              navigationRouteComponentMap[
                navigationRouteNames.UserProfileScreen
              ]
            }
        />
      </Stack.Navigator>
    </NativeNavigationContainer>
  );
}
