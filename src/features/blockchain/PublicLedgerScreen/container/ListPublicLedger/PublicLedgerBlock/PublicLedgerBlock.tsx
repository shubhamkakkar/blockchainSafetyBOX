import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { dateString, determineIsSameDay, twelveHourClockTime } from 'utils/dateHelpers';
import TextUI from 'UI/TextUI';
import Icon from 'UI/Icon';
import theme from 'theme';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import styles from './publicLedgerBlock.styles';

type Props = {
  item: any;
  userId: string;
  prevDate?: string;
  infoIconTranslateY: Animated.AnimatedInterpolation;
  onInfoIconPressHandler: (_blockId: string) => void
};

export default function PublicLedgerBlock({
  item,
  prevDate,
  userId,
  infoIconTranslateY,
  onInfoIconPressHandler,
}: Props) {
  const isSameDayBool = determineIsSameDay(item.get('createdAt'), prevDate);

  function onInfoIconPress() {
    onInfoIconPressHandler(item.get('_id'));
  }

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
            <Animated.View
              style={[
                styles.row, styles.hMargin5,
                { transform: [{ translateY: infoIconTranslateY }] },
              ]}
            >
              <TouchableOpacity onPress={onInfoIconPress}>
                <Icon
                  name="information-outline"
                  size={30}
                  noMargin
                  color={theme.SUCCESS}
                />
              </TouchableOpacity>
            </Animated.View>
            )}
          </View>
          <LayoutAnimationWrapper
            title="Hash"
            isAllCenter
            buttonContainer={styles.tMargin5}
          >
            <TextUI
              center
            >
              {item.get('hash')}
            </TextUI>
          </LayoutAnimationWrapper>
        </View>
      )}
    </View>
  );
}
