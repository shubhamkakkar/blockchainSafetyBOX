import React from 'react';
import {
  ScrollView, TextInput, TextInputProps, View,
} from 'react-native';
import Icon from 'UI/Icon';

import styles from './searchBar.styles';

type Props = {
  textInputProps: TextInputProps
};
export default function SearchBar({ textInputProps }: Props) {
  return (
    <ScrollView>
      <View style={styles.viewContainer}>
        <Icon name="account-search" />
        <TextInput {...textInputProps} />
      </View>
    </ScrollView>
  );
}
