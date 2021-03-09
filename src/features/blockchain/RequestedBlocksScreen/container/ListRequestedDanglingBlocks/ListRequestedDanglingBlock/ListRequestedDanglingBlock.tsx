import React, { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import {
  AcceptDeclineDanglingBlockMutationVariables, useAcceptDeclineDanglingBlockMutation,
  useIsAlreadyVotedLazyQuery,
} from 'generated/graphql';
import TextUI from 'UI/TextUI';
import messageTypeEnumToStringConverter from 'utils/messageTypeEnumToStringConverter';
import theme from 'theme';
import { humanReadableDate } from 'utils/dateHelpers';
// @ts-ignore
import { FONT_SIZES, USER_ROLE_TYPE } from 'constants';
import { RecordOf } from 'immutable';
import Icon from 'UI/Icon';
import CreatedBy
  from "features/blockchain/PublicLedgerScreen/container/ListPublicLedger/PublicLedgerBlock/CreatedBy";
import CountAndCountButton from './CountAndCountButton';
import styles from './listRequestedDanglingBlock.styles';

type Props = {
  item: RecordOf<any>,
  userProfile: any,
};
export default function ListRequestedDanglingBlock(
  { item, userProfile }: Props,
) {
  const isOwner = useMemo(() => item.get('user').get('_id')
      === userProfile?.get('_id'), [item]);
  const showAcceptDeclineButtons = useMemo(() => userProfile?.get('role')
      === USER_ROLE_TYPE.ADMIN && !isOwner, []);
  const blockId = useMemo(() => item.get('_id'), []);

  const [acceptCount, setAcceptCount] = useState<number>(item.get('acceptCount'));
  const [rejectCount, setRejectCount] = useState<number>(item.get('rejectCount'));

  const isVoted = item.get('acceptCount') !== acceptCount
      || item.get('rejectCount') !== rejectCount;

  const [isAlreadyVoted, isAlreadyVotedResponse] = useIsAlreadyVotedLazyQuery();
  const [
    acceptDeclineDanglingBlockMutation,
  ] = useAcceptDeclineDanglingBlockMutation();

  async function updateAcceptRejectCount(
    variables: AcceptDeclineDanglingBlockMutationVariables,
  ) {
    try {
      await acceptDeclineDanglingBlockMutation({ variables });
      if (variables.isAccept) {
        setAcceptCount(acceptCount + 1);
      } else {
        setRejectCount(rejectCount + 1);
      }
    } catch (e) {
      console.log('updateAcceptRejectCount e()', e);
    }
  }

  function onRejectCountPressHandler() {
    updateAcceptRejectCount({
      blockId,
    });
  }

  function onAcceptCountPressHandler() {
    updateAcceptRejectCount({
      blockId,
      isAccept: true,
    });
  }

  useEffect(() => {
    if (showAcceptDeclineButtons) {
      isAlreadyVoted({ variables: { blockId } });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <TextUI fontWeight="SemiBold">
            {messageTypeEnumToStringConverter(item.get('messageType'))}
          </TextUI>
          {isOwner && <Icon name="human-greeting" style={styles.isOwnerIcon} isError />}
        </View>
        <View style={styles.requestedAtContainer}>
          <CreatedBy
              item={item}
              itemKey="user"
          />
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
