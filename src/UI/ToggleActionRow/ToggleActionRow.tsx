import React, { useMemo } from 'react';
import { Switch, View, ViewStyle } from 'react-native';
import { useField } from 'formik';
import theme from 'theme';
import FormikErrorUI from '../FormikErrorUI';
import TextUI from '../TextUI';
import Icon from '../Icon';
import styles from './toggleActionRow.styles';

type Props = {
  containerStyle?: ViewStyle;
  isIcon?: boolean;
  leftTitle: string;
  rightTitle?: string;
  fieldName: string;
  defaultFieldValue: string;
  toggleToFieldValue: string
};
export default function ToggleActionRow(props: Props) {
  const [field, meta] = useField(props.fieldName);
  const error = useMemo(() => ((meta.touched && meta.error) ? meta.error : ''),
    [meta.error, meta.touched]);

  const isDefaultFieldValue = useMemo(() => field.value === props.defaultFieldValue,
    [field.value, props.defaultFieldValue]);

  const leftContentColor = isDefaultFieldValue ? theme.DARK_PRIMARY : theme.BLACK;
  const rightIconColor = isDefaultFieldValue ? theme.BLACK : theme.DARK_PRIMARY;

  function handleToggle() {
    field.onChange(props.fieldName)(field.value === props.defaultFieldValue
      ? props.toggleToFieldValue : props.defaultFieldValue);
  }

  return (
    <View style={[styles.container, props.containerStyle || {}]}>
      <View style={styles.row}>
        {props.isIcon
          ? (
            <Icon
              name={props.leftTitle}
              color={leftContentColor}
            />
          )
          : (
            <TextUI
              color={leftContentColor}
              fontWeight={isDefaultFieldValue ? 'Bold' : 'Regular'}
            >
              {props.leftTitle}
            </TextUI>
          )}
        <Switch
          onValueChange={handleToggle}
          value={field.value !== props.defaultFieldValue}
          trackColor={{ false: theme.LIGHT_PRIMARY, true: theme.LIGHT_PRIMARY }}
          ios_backgroundColor={theme.LIGHT_PRIMARY}
        />
        { !!props.rightTitle
        && (props.isIcon
          ? (
            <Icon
              color={rightIconColor}
              name={props.rightTitle}
            />
          )
          : (
            <TextUI
              color={rightIconColor}
              fontWeight={isDefaultFieldValue ? 'Regular' : 'Bold'}
            >
              {props.rightTitle}
            </TextUI>
          )
        )}
      </View>
      <FormikErrorUI error={error} />
    </View>
  );
}
