import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon';
import theme from 'theme';
// @ts-ignore
import { DEFAULT_ICON_SIZE } from 'constants';
import styles from './icon.styles';

interface Props extends IconProps {
  isError?: boolean;
  noMargin?: boolean
}

export default function Icon({
  isError, noMargin, style = {}, ...rest
}: Props) {
  return (
    <MaterialCommunityIcons
      size={DEFAULT_ICON_SIZE}
      color={isError ? theme.RED : theme.PRIMARY}
      style={[!noMargin && styles.defaultIconsStyle, style]}
      {...rest}
    />
  );
}
