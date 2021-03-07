import React from 'react';
import Icon from 'UI/Icon';
import theme from 'theme';
import TextUI from 'UI/TextUI';
import { twelveHourClockTime } from 'utils/dateHelpers';
import { View } from 'react-native';
import styles from '../publicLedgerBlock.styles';

type Props = {
  createdAt: Date;
};
export default function CreatedAt({ createdAt }: Props) {
  return (
    <View style={styles.row}>
      <Icon
        name="calendar-clock"
        color={theme.DARK_PRIMARY}
      />
      <TextUI>
        {twelveHourClockTime(createdAt)}
      </TextUI>
    </View>
  );
}
