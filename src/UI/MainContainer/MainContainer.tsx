import React from 'react';
import {
  StyleSheet, View, ViewProps,
} from 'react-native';
import theme from 'theme';
import { DEFAULT_HORIZONTAL_PADDING } from 'constants';

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
      <View style={[styles.container, style]}>
        {rest.children}
      </View>
    </>
  );
}
