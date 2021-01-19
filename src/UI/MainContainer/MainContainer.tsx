import React from 'react';
import {
  SafeAreaView, StyleSheet, View, ViewProps, ViewStyle,
} from 'react-native';
import theme from 'theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.WHITE,
    flex: 1,
  },

});

interface Props extends ViewProps {
  children: Element | Element[];
}

export default function MainContainer({
  style,
  ...rest
}: Props) {
  return (
    <>
      <SafeAreaView />
      <SafeAreaView style={[styles.container, StyleSheet.absoluteFill]}>
        <View style={[styles.container, style]}>
          {rest.children}
        </View>
      </SafeAreaView>
    </>
  );
}
