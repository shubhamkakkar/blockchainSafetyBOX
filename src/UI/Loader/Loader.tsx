import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import theme from 'theme';

export default function Loader({ color, ...props } : ActivityIndicatorProps) {
  return (
    <ActivityIndicator
      color={color || theme.DARK_PRIMARY}
      {...props}
    />
  );
}
