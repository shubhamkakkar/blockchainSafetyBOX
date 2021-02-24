import React, { useEffect, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import EmptyUI from 'UI/EmptyUI';
import {
  AcceptDeclineDanglingBlockMutationVariables,
  TRequestedDanglingBlock,
  useAcceptDeclineDanglingBlockMutation,
  useRequestedDanglingBlocksLazyQuery,
} from 'generated/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
// @ts-ignore
import { USER_ROLE_TYPE } from 'constants';
import { addDanglingBlocks } from 'store/actions/danglingBlocks.actions';
import { danglingBlocks, myDanglingBlocks } from 'store/selectors/danglingBlocks.selectors';
import { RecordOf } from 'immutable';
import ListRequestedDanglingBlock from './ListRequestedDanglingBlock';

type Props = {
  isUserOnly?: boolean
};
export default function ListRequestedDanglingBlocks(props: Props) {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const storedRequestedBlocks = useSelector(
    props.isUserOnly ? myDanglingBlocks : danglingBlocks,
  );
  const showAcceptDeclineButtons = useMemo(
    () => props.isUserOnly || userProfile?.get('role') === USER_ROLE_TYPE.ADMIN,
    [props.isUserOnly, userProfile],
  );
  const [requestBocks, requestedBlocks] = useRequestedDanglingBlocksLazyQuery(
    { variables: { isUserOnly: !!props.isUserOnly } },
  );
  const [
    acceptDeclineDanglingBlockMutation,
  ] = useAcceptDeclineDanglingBlockMutation();

  async function fetchData() {
    try {
      await requestBocks();
    } catch (e) {
      console.log(`ListRequestedDanglingBlocks e() props.isUserOnly ${props.isUserOnly}`, e);
    }
  }

  function refetchHandler() {
    if (requestedBlocks && requestedBlocks.refetch) {
      requestedBlocks.refetch({ isUserOnly: !!props.isUserOnly });
    }
  }

  async function updateAcceptRejectCount(
    variables: AcceptDeclineDanglingBlockMutationVariables, cb: () => void,
  ) {
    try {
      await acceptDeclineDanglingBlockMutation({ variables });
      cb();
    } catch (e) {
      console.log('updateAcceptRejectCount e()', e);
    }
  }

  useEffect(() => {
    if (requestedBlocks?.data?.requestedBlocks) {
      dispatch(
        addDanglingBlocks(requestedBlocks?.data?.requestedBlocks as TRequestedDanglingBlock[]),
      );
    }
  }, [requestedBlocks]);

  function renderListRequestedDanglingBlockItem(
    { item }: { item: RecordOf<TRequestedDanglingBlock> },
  ) {
    return (
      <ListRequestedDanglingBlock
        {...{
          item,
          showAcceptDeclineButtons,
          updateAcceptRejectCount,
        }}
      />
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList<RecordOf<TRequestedDanglingBlock>>
      data={storedRequestedBlocks?.toArray() || [] as any}
      extraData={storedRequestedBlocks || []}
      renderItem={renderListRequestedDanglingBlockItem}
      keyExtractor={(item) => item.get('_id')}
      ListEmptyComponent={<EmptyUI isLoading={requestedBlocks.loading} />}
      onRefresh={refetchHandler}
      refreshing={requestedBlocks.loading}
    />
  );
}
