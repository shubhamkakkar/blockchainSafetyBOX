import React from 'react';
import { View } from 'react-native';
import { dateString, determineIsSameDay, twelveHourClockTime } from 'utils/dateHelpers';
import TextUI from 'UI/TextUI';
import Icon from 'UI/Icon';
import theme from 'theme';
import styles from './publicLedgerBlock.styles';

type Props = {
  item: any;
  userId: string;
  prevDate?: string
};

export default function PublicLedgerBlock({
  item,
  prevDate,
  userId,
}: Props) {
  const isSameDayBool = determineIsSameDay(item.get('createdAt'), prevDate);
  return (
    <View style={styles.container}>
      {!isSameDayBool ? (
        <View style={[styles.dateSlimSectionHeader, styles.row]}>
          <Icon name="calendar" />
          <TextUI>{dateString(new Date(item.get('createdAt')))}</TextUI>
        </View>
      ) : (
        <View style={styles.cardDescription}>
          <View style={[styles.row, styles.spaceBetween]}>
            <View style={styles.row}>
              <Icon
                name="calendar-clock"
                color={theme.DARK_PRIMARY}
              />
              <TextUI>
                {twelveHourClockTime(item.get('createdAt'))}
              </TextUI>
            </View>
            {item.get('ownerId') === userId && (
            <View style={styles.row}>
              <Icon name="human-greeting" isError />
            </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
