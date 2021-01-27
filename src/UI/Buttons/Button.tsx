import React from 'react';
import {
  TextStyle, TouchableOpacity, TouchableOpacityProps, View,
} from 'react-native';
import TextUI from 'UI/TextUI';
import theme from 'theme';
// @ts-ignore
import { FONT_SIZES } from 'constants';
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'UI/Icon';
import styles from './button.style';

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  titleColor?: theme
  children?: React.ReactElement | React.ReactElement[]
  fontWeight?: 'Black' | 'Bold' | 'ExtraBold' | 'ExtraLight' | 'Light' | 'Medium' | 'Regular' | 'SemiBold' | 'Thin';
  fontSize?: FONT_SIZES;
  textStyle?: TextStyle | TextStyle[];
  rightIcon?: IconProps;
  leftIcon?: IconProps;
}
export default function Button({
  children,
  rightIcon,
  leftIcon,
  title = '',
  style = {},
  fontSize = FONT_SIZES.MEDIUM_TEXT,
  fontWeight = 'SemiBold',
  titleColor = theme.WHITE,
  textStyle = {},

  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style, rest.disabled && styles.disabledButton]}
      {...rest}
    >
      {children || (
      <>
        {!!leftIcon?.name && (
        <View style={styles.leftIconContainer}>
          <Icon {...leftIcon} />
        </View>
        ) }
        <TextUI
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={titleColor}
          style={textStyle}
        >
          {title}
        </TextUI>
        {!!rightIcon?.name
        && (
        <View style={styles.rightIconContainer}>
          <Icon {...rightIcon} />
        </View>
        )}
      </>
      )}
    </TouchableOpacity>
  );
}
