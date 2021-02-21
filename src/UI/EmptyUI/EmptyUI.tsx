import React from 'react';
import { View } from 'react-native';
import TextUI from '../TextUI';
import Loader from '../Loader';
import styles from './emptyUI.styles';

type Props = {
  isLoading?: boolean;
};

export default function EmptyUI(props: Props) {
  return (
    <View style={styles.allCenter}>
      {props.isLoading ? <Loader /> : <TextUI> No content found </TextUI>}
    </View>
  );
}
