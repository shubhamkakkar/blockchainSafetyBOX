import React from 'react';
import {
  Platform, StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from 'theme';
import NavigationContainer from 'navigationContainer';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';

export default function App() {
  return (
    <SafeAreaProvider>
      {Platform.OS === 'android' && (
      <StatusBar
        backgroundColor={theme.PRIMARY}
        networkActivityIndicatorVisible
      />
      )}
      <ApolloProvider client={apolloClient}>
        <NavigationContainer />
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
