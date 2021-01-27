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
import { NavigationStack } from './navigation';

const Stack = createStackNavigator<NavigationStack>();

export default function NavigationContainer() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAuthToken = async () => {
    try {
      const authToken = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEYS.AUTH_TOKEN,
      );
      if (authToken !== null) {
        request.token = authToken;
        setTimeout(() => setIsSignedIn(true), 2000);
      }
    } catch (_e) {
      setIsSignedIn(false);
    } finally {
      setTimeout(() => setIsLoading(false), 3000);
    }
  };
  useEffect(() => {
    getAuthToken();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NativeNavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isSignedIn
        && (
        <>
          <Stack.Screen
            name={navigationRouteNames.AuthScreen as any}
            component={
              navigationRouteComponentMap[
                navigationRouteNames.AuthScreen
              ]
            }
          />
          <Stack.Screen
            name={navigationRouteNames.PrivateKeyDownloadScreen as any}
            component={
              navigationRouteComponentMap[
                navigationRouteNames.PrivateKeyDownloadScreen
              ]
            }
          />
        </>
        )}
        <Stack.Screen
          name={navigationRouteNames.PublicLedgerScreen as any}
          component={
              navigationRouteComponentMap[
                navigationRouteNames.BottomTabNavigation
              ]
            }
        />
      </Stack.Navigator>
    </NativeNavigationContainer>
  );
}
