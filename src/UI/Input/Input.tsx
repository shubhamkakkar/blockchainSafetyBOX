import React, { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { useField } from 'formik';

import styles from 'UI/Input/input.style';
import FormikErrorUI from 'UI/FormikErrorUI';
import TextInput, { Props } from './TextInput/TextInput';

interface InputProps extends Omit<Props, 'isError'> {
  fieldName: string;
}

export default function Input({
  autoFocus,
  fieldName,
  ...rest
}: InputProps) {
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
    <TextInput
      onBlur={handleBlur}
      onFocus={handleFocus}
      customContainerStyle={
                [
                  (isFocused ? styles.inputFieldContainerActive : {}),
                  (error ? styles.inputFieldContainerError : {}),
                ]
            }
      onChangeText={field.onChange(fieldName)}
      value={field.value || ''}
      FormikError={<FormikErrorUI error={error} />}
      isError={!!error}
      {...rest}
    />
  );
}
