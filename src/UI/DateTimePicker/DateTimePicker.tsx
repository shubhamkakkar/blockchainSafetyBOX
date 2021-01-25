import React, { useMemo, useState } from 'react';
import {
  Platform, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import RNDateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useField } from 'formik';
import { dateString } from 'utils/dateHelpers';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import FormikErrorUI from '../FormikErrorUI';
import TextUI from '../TextUI';
import styles from './dateTimePicker.styles';
import Icon from '../Icon';

type Props = {
  fieldName: string
  inputContainer?: ViewStyle
  mode?: 'date' | 'time'
};
export default function DateTimePicker({
  fieldName,
  mode = 'date',
  inputContainer = {},
}: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [field, meta, fieldHelpers] = useField(fieldName);

  const error = useMemo(() => ((meta.touched && meta.error) ? meta.error : ''),
    [meta.error, meta.touched]);

  const date = useMemo(() => new Date(), []);

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
      <View style={[
        styles.row,
        styles.inputFieldContainer,
      ]}
      >
        <Icon name="calendar" />
        <TouchableOpacity
          onBlur={handleBlur}
          onPress={toggleDatePicker}
        >
          <TextUI
            fontSize={FONT_SIZES.SMALL_TEXT_ALTERNATE}
          >
            {dateString(field.value)}
          </TextUI>
        </TouchableOpacity>
      </View>
      <FormikErrorUI error={error} />
      {show && (
        <RNDateTimePicker
          value={field.value}
          mode={mode}
          is24Hour
          display="default"
          onChange={onChangeHandler}
          maximumDate={date}
        />
      )}
    </View>
  );
}
