import React from 'react';
import { View } from 'react-native';
import TextUI from 'UI/TextUI';
import BorderButton from 'UI/Buttons/BorderButton';
import styles from './countAndCountButton.styles';

type Props = {
  title: string;
  onPress: () => void
  value: number;
  isReject?: boolean
  disabled: boolean;
  showAcceptDeclineButtons?: boolean
};
export default function CountAndCountButton(props: Props) {
  return (
    <View>
      <TextUI>
        {props.title}
        {' '}
        Count
      </TextUI>
      <TextUI fontWeight="Bold">
        {props.value}
      </TextUI>
      {props.showAcceptDeclineButtons && (
        <BorderButton
          onPress={props.onPress}
          title={props.title}
          style={[styles.baseButton, props.isReject && styles.rejectButton]}
          textStyle={[props.isReject ? styles.rejectButtonTitle : styles.baseTitle]}
          disabled={props.disabled}
        />
      )}
    </View>
  );
}
