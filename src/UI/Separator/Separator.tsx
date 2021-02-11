import React from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './separator.styles';

type Props = {
  style?: ViewStyle
};

export default function Separator(props: Props) {
  return (
    <View style={[styles.separator, props.style]} />
  );
}
