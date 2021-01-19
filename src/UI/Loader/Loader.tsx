import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

export default function Loader(props : ActivityIndicatorProps) {
  return (
    <ActivityIndicator {...props} />
  );
}
