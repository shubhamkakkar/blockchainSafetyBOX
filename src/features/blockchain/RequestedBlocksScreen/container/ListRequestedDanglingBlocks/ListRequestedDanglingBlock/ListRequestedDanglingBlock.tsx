import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  AcceptDeclineDanglingBlockMutationVariables,
  TRequestedDanglingBlock, useIsAlreadyVotedLazyQuery, useIsAlreadyVotedQuery,
} from 'generated/graphql';
import TextUI from 'UI/TextUI';
import messageTypeEnumToStringConverter from 'utils/messageTypeEnumToStringConverter';
import theme from 'theme';
import { humanReadableDate } from 'utils/dateHelpers';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import { RecordOf } from 'immutable';
import CountAndCountButton from './CountAndCountButton';
import styles from './listRequestedDanglingBlock.styles';

type Props = {
  item: RecordOf<any>,
  showAcceptDeclineButtons?: boolean;
  updateAcceptRejectCount: (
    _variables: AcceptDeclineDanglingBlockMutationVariables, _cb: () => void
  ) => void,
};
export default function ListRequestedDanglingBlock(
  { item, showAcceptDeclineButtons, updateAcceptRejectCount }: Props,
) {
  const [acceptCount, setAcceptCount] = useState<number>(item.get('acceptCount'));
  const [rejectCount, setRejectCount] = useState<number>(item.get('rejectCount'));
  const [isAlreadyVoted, isAlreadyVotedResponse] = useIsAlreadyVotedLazyQuery();

  const isVoted = item.acceptCount !== acceptCount || item.rejectCount !== rejectCount;
  function updateAcceptRejectCountHandler(isAccept?: boolean) {
    if (isAccept) {
      setAcceptCount(acceptCount + 1);
    } else {
      setRejectCount(rejectCount + 1);
    }
  }
  function onRejectCountPressHandler() {
    updateAcceptRejectCount({
      blockId: item.get('_id'),
    }, updateAcceptRejectCountHandler);
  }

  function onAcceptCountPressHandler() {
    updateAcceptRejectCount({
      // eslint-disable-next-line no-underscore-dangle
      blockId: item._id,
      isAccept: true,
    }, () => updateAcceptRejectCountHandler(true));
  }

  useEffect(() => {
    if (showAcceptDeclineButtons) {
    // eslint-disable-next-line no-underscore-dangle
      isAlreadyVoted({ variables: { blockId: item._id } });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TextUI fontWeight="SemiBold">
          {messageTypeEnumToStringConverter(item.get('messageType'))}
        </TextUI>
        <View style={styles.requestedAtContainer}>
          <TextUI color={theme.GREY} fontSize={FONT_SIZES.SMALL_TEXT}>
            {`By ${item.get('user').get('firstName')} ${item.get('user').get('lastName')}`}
          </TextUI>
          <TextUI color={theme.GREY} fontSize={FONT_SIZES.SMALL_TEXT}>
            {humanReadableDate(item.get('requestAt'))}
          </TextUI>
        </View>
      </View>
      <View style={styles.actionRowContainer}>
        <CountAndCountButton
          title="Reject"
          onPress={onRejectCountPressHandler}
          value={rejectCount}
          isReject
          disabled={isVoted || !!isAlreadyVotedResponse.data?.isAlreadyVoted}
          showAcceptDeclineButtons={showAcceptDeclineButtons}
        />
        <CountAndCountButton
          title="Accept"
          onPress={onAcceptCountPressHandler}
          value={acceptCount}
          disabled={isVoted || !!isAlreadyVotedResponse.data?.isAlreadyVoted}
          showAcceptDeclineButtons={showAcceptDeclineButtons}
        />
      </View>
    </View>
  );
}
