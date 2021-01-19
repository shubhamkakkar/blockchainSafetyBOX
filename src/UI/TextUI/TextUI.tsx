import React from 'react';
import {
  StyleSheet, Text, TextProps, TextStyle,
} from 'react-native';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import theme from 'theme';

export interface TextUIProps extends TextProps {
  // eslint-disable-next-line react/require-default-props
  fontWeight?: 'Black' | 'Bold' | 'ExtraBold' | 'ExtraLight' | 'Light' | 'Medium' | 'Regular' | 'SemiBold' | 'Thin';
  isItalic?: boolean;
  fontSize?: FONT_SIZES;
  center?: boolean;
  style?: TextStyle | TextStyle[];
  children?: any;
  color?: theme
}

export default function TextUI(
  {
    style,
    fontWeight = 'Regular',
    isItalic,
    fontSize = FONT_SIZES.MEDIUM_TEXT,
    center,
    children,
    color = theme.BLACK,
    ...rest
  }: TextUIProps,
) {
  const italic = isItalic ? 'Italic' : '';
  return (
    <Text
      style={StyleSheet.flatten([
        {
          fontFamily: `Poppins-${fontWeight}${italic}`,
          fontSize,
          textAlign: center ? 'center' : undefined,
          color,
        },
        style,
      ])}
      {...rest}
    >
      {children}
    </Text>
  );
}
