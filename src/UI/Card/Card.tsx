import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import styles from './card.styles';

export default function Card(props: Props) {
  const {
    hasNoPadding,
    style,
    hasBorder,
    hasLightShadow,
    hasNoShadow,
    children,
  } = props;

  // eslint-disable-next-line no-nested-ternary
  const shadowStyle = hasNoShadow
    ? {}
    : hasLightShadow
      ? styles.cardLightShadow
      : styles.cardBoldShadow;

  return (
    <Animated.View
      style={StyleSheet.flatten([
        (hasNoPadding ? styles.hasNoPadding : styles.cardStyle),
        (hasBorder ? styles.cardStyleBorder : {}),
        shadowStyle,
        style,
      ])}
    >
      {children}
    </Animated.View>
  );
}

type Props = {
  hasBorder?: boolean;
  style?: any;
  hasLightShadow?: boolean;
  hasNoShadow?: boolean;
  hasNoPadding?: boolean;
  children: React.ReactElement | React.ReactElement[]
};
