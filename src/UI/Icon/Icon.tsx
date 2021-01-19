import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon';
import theme from 'theme';
import styles from './icon.styles';

interface Props extends IconProps {
  isError?: boolean
}

export default function Icon({ isError, style = {}, ...rest }: Props) {
  return (
    <MaterialCommunityIcons
      size={22}
      color={isError ? theme.RED : theme.PRIMARY}
      style={[styles.defaultIconsStyle, style]}
      {...rest}
    />
  );
}
