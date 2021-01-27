import React from 'react';
import { View } from 'react-native';
import theme from 'theme';
import TextUI from '../TextUI';
import styles from './keyValuePairRow.styles';

type Props = {
  label: string
  value: string | undefined
};
export default function KeyValuePairRow(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.keyContainer}>
        <TextUI fontWeight="SemiBold" color={theme.DARK_PRIMARY}>
          {props.label}
        </TextUI>
      </View>
      <View style={styles.valueContainer}>
        <TextUI>
          {props.value}
        </TextUI>
      </View>
    </View>
  );
}
