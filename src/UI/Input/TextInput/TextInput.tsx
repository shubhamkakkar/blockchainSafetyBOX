import React from 'react';
import styles from 'UI/Input/input.style';
import {
  TextInputProps, View, ViewStyle, TextInput as TextInputRN,
} from 'react-native';
import Icon from 'UI/Icon';
import theme from 'theme';
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon';

export interface Props extends TextInputProps {
  iconProps?: IconProps;
  stateType?: string;
  inputContainer?: ViewStyle
  isNotFormik?: boolean;
  customContainerStyle?: ViewStyle[];
  FormikError?: React.ReactElement;
  isError?: boolean
}

export default function TextInput({
  customContainerStyle = [],
  inputContainer = {},
  FormikError,
  iconProps,
  style = {},
  isError,
  ...rest
}: Props) {
  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <View style={[
        styles.row,
        styles.inputFieldContainer,
        ...customContainerStyle,
      ]}
      >
        {iconProps?.name && (
          <Icon {...{
            ...iconProps,
            isError,
          }}
          />
        )}
        <TextInputRN
          style={[styles.textInputStyle, style]}
          placeholderTextColor={theme.GREY}
          {...rest}
        />
      </View>
      {FormikError && FormikError}
    </View>
  );
}
