import React, { useEffect, useMemo, useState } from 'react';
import {
  TextInput, TextInputProps, View, ViewStyle,
} from 'react-native';
import theme from 'theme';
// eslint-disable-next-line import/no-unresolved
import { IconProps } from 'react-native-vector-icons/Icon';
import { useField } from 'formik';
import FormikErrorUI from 'UI/FormikErrorUI';
import Icon from '../Icon';
import styles from './input.style';

interface Props extends TextInputProps {
  fieldName: string;
  iconProps?: IconProps;
  stateType?: string;
  inputContainer?: ViewStyle
}

export default function Input({
  autoFocus,
  fieldName,
  iconProps,
  style = {},
  inputContainer = {},
  ...rest
}: Props) {
  const [field, meta] = useField(fieldName);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const error = useMemo(() => ((meta.touched && meta.error) ? meta.error : ''),
    [meta.error, meta.touched]);

  function handleBlur(e: any) {
    setIsFocused(false);
    field.onBlur(fieldName)(e);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  useEffect(() => {
    if (autoFocus) {
      handleFocus();
    }
  }, [autoFocus]);

  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <View style={[
        styles.row,
        styles.inputFieldContainer,
        (isFocused && styles.inputFieldContainerActive),
        (!!error && styles.inputFieldContainerError),
      ]}
      >
        {iconProps?.name && <Icon {...{ ...iconProps, isError: !!error }} />}
        <TextInput
          style={[styles.textInputStyle, style]}
          placeholderTextColor={theme.GREY}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={field.onChange(fieldName)}
          value={field.value}
          {...rest}
        />
      </View>
      <FormikErrorUI error={error} />
    </View>
  );
}
