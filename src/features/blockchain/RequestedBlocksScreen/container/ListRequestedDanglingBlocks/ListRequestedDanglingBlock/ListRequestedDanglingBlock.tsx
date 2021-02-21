import React, { useState } from 'react';
import { View } from 'react-native';
import { TRequestedDanglingBlock } from 'generated/graphql';
import TextUI from 'UI/TextUI';
import messageTypeEnumToStringConverter from 'utils/messageTypeEnumToStringConverter';
import theme from 'theme';
import { humanReadableDate } from 'utils/dateHelpers';
import { FONT_SIZES } from 'constants';
import CountAndCountButton from './CountAndCountButton';
import styles from './listRequestedDanglingBlock.styles';

type Props = {
  item: TRequestedDanglingBlock,
  isUserOnly?: boolean
};
export default function ListRequestedDanglingBlock(props: Props) {
  const [acceptCount, setAcceptCount] = useState<number>(props.item.acceptCount);
  const [rejectCount, setRejectCount] = useState<number>(props.item.rejectCount);

  const isVoted = props.item.acceptCount !== acceptCount || props.item.rejectCount !== rejectCount;

  function onRejectCountPressHandler() {
    setRejectCount(rejectCount + 1);
  }

  function onAcceptCountPressHandler() {
    setAcceptCount(acceptCount + 1);
  }

  return (
    <View style={styles.container}>
      <View>
        <TextUI fontWeight="SemiBold">
          {messageTypeEnumToStringConverter(props.item.messageType)}
        </TextUI>
        <View style={styles.requestedAtContainer}>
          <TextUI color={theme.GREY} fontSize={FONT_SIZES.SMALL_TEXT}>
            {humanReadableDate(props.item.requestAt)}
          </TextUI>
        </View>
      </View>
      <View style={styles.actionRowContainer}>
        <CountAndCountButton
          title="Reject"
          onPress={onRejectCountPressHandler}
          value={rejectCount}
          isReject
          disabled={isVoted}
        />
        <CountAndCountButton
          title="Accept"
          onPress={onAcceptCountPressHandler}
          value={acceptCount}
          disabled={isVoted}
        />
      </View>
    </View>
  );
}
