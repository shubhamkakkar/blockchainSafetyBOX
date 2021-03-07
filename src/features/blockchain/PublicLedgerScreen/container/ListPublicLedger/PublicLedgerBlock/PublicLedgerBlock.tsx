import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { dateString, determineIsSameDay } from 'utils/dateHelpers';
import TextUI from 'UI/TextUI';
import Icon from 'UI/Icon';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import { DecryptBlock } from 'types';
import CreatedBy
  from 'features/blockchain/PublicLedgerScreen/container/ListPublicLedger/PublicLedgerBlock/CreatedBy';
import CreatedAt from './CreatedAt';
import styles from './publicLedgerBlock.styles';

type Props = {
  item: any;
  userId: string;
  prevDate?: string;
  infoIconTranslateY: Animated.AnimatedInterpolation;
  onInfoIconPressHandler: (_block: DecryptBlock) => void
  isAdmin: boolean
};

export default function PublicLedgerBlock({
  item,
  prevDate,
  userId,
  infoIconTranslateY,
  onInfoIconPressHandler,
  isAdmin,
}: Props) {
  const isSameDayBool = determineIsSameDay(item.get('createdAt'), prevDate);

  function onInfoIconPress() {
    onInfoIconPressHandler(item.toJS());
  }

  return (
    <View style={styles.container}>
      {!isSameDayBool && (
        <View style={[styles.dateSlimSectionHeader, styles.row]}>
          <Icon name="calendar" />
          <TextUI>{dateString(new Date(item.get('createdAt')))}</TextUI>
        </View>
      )}
      <View style={styles.cardDescription}>
        <View style={[styles.row, styles.spaceBetween]}>
          <CreatedAt
            createdAt={item.get('createdAt')}
          />
          {item.get('ownerId') === userId && (
            <Animated.View
              style={[
                styles.row, styles.hMargin5,
                { transform: [{ translateY: infoIconTranslateY }] },
              ]}
            >
              <TouchableOpacity onPress={onInfoIconPress}>
                <Icon
                  name="shield-key"
                  size={30}
                  noMargin
                  isError
                />
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>
        {isAdmin && item.get('ownerId') !== userId && (
        <CreatedBy
          item={item}
          itemKey="ownerProfile"
        />
        )}
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
    </View>
  );
}
