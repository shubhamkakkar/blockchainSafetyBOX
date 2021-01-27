import React from 'react';
import {
  StatusBar, StyleSheet,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavigationContainer from 'navigationContainer';
import { ApolloProvider } from '@apollo/client';
import theme from 'theme';
import store from 'store/store';
import { Provider } from 'react-redux';
import apolloClient from './apolloClient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={apolloClient}>
        <StatusBar
          animated
          translucent
          backgroundColor={theme.RED}
          networkActivityIndicatorVisible
          barStyle="dark-content"
        />
        <SafeAreaView style={[styles.container, StyleSheet.absoluteFill]}>
          <Provider store={store}>
            <NavigationContainer />
          </Provider>
        </SafeAreaView>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
