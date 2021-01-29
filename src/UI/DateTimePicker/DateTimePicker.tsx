import React, { useMemo, useState } from 'react';
import {
  Platform, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import RNDateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useField } from 'formik';
import { dateString } from 'utils/dateHelpers';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import theme from 'theme';
import FormikErrorUI from '../FormikErrorUI';
import TextUI from '../TextUI';
import styles from './dateTimePicker.styles';
import Icon from '../Icon';

type Props = {
  fieldName: string
  placeholder: string;
  maximumDate?: Date
  inputContainer?: ViewStyle
  mode?: 'date' | 'time'
};
export default function DateTimePicker({
  fieldName,
  placeholder,
  maximumDate,
  mode = 'date',
  inputContainer = {},
}: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [field, meta, fieldHelpers] = useField(fieldName);

  const error = useMemo(() => ((meta.touched && meta.error) ? meta.error : ''),
    [meta.error, meta.touched]);

  function onChangeHandler(event: Event, selectedDate?: Date) {
    const currentDate = selectedDate || field.value;
    setShow(Platform.OS === 'ios');
    fieldHelpers.setValue(currentDate);
  }

  function toggleDatePicker() {
    setShow(!show);
  }

  function handleBlur(e: any) {
    field.onBlur(fieldName)(e);
  }

  return (
    <View style={[styles.inputContainer, inputContainer]}>

      <TouchableOpacity
        onBlur={handleBlur}
        onPress={toggleDatePicker}
        style={[
          styles.row,
          styles.inputFieldContainer,
          (!!error && styles.inputFieldContainerError),
        ]}
      >
        <Icon name="calendar" isError={!!error} />
        <TextUI
          fontSize={FONT_SIZES.SMALL_TEXT_ALTERNATE}
          color={field.value ? theme.BLACK : theme.GREY}
        >
          { field.value ? dateString(field.value) : placeholder}
        </TextUI>
      </TouchableOpacity>
      <View style={styles.formikErrorContainer}>
        <FormikErrorUI error={error} />
      </View>
      {show && (
        <RNDateTimePicker
          value={field.value || new Date()}
          mode={mode}
          is24Hour
          display="default"
          onChange={onChangeHandler}
          maximumDate={maximumDate}
        />
      )}
    </View>
  );
}
