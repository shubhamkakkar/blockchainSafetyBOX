import React, { useEffect } from 'react';
import {
  Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent,
} from 'react-native';
import EmptyUI from 'UI/EmptyUI';
import { TRequestedDanglingBlock, useRequestedDanglingBlocksLazyQuery } from 'generated/graphql';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import { addDanglingBlocks, addMyDanglingBlocks } from 'store/actions/danglingBlocks.actions';
import { danglingBlocks, myDanglingBlocks } from 'store/selectors/danglingBlocks.selectors';
import { RecordOf } from 'immutable';
// @ts-ignore
import {
  HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
  HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';
import ListRequestedDanglingBlock from './ListRequestedDanglingBlock';

type Props = {
  isUserOnly?: boolean;
  scrollPositionHandler: (_event: NativeSyntheticEvent<NativeScrollEvent>) => void
};
export default function ListRequestedDanglingBlocks(props: Props) {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const storedRequestedBlocks = useSelector(
    props.isUserOnly ? myDanglingBlocks : danglingBlocks,
  );
  const [requestBocks, requestedBlocks] = useRequestedDanglingBlocksLazyQuery(
    { variables: { isUserOnly: !!props.isUserOnly } },
  );

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

  useEffect(() => {
    if (requestedBlocks?.data?.requestedBlocks) {
      const dispatchAction = props.isUserOnly ? addMyDanglingBlocks : addDanglingBlocks;
      dispatch(
        dispatchAction(requestedBlocks?.data?.requestedBlocks as TRequestedDanglingBlock[]),
      );
    }
  }, [requestedBlocks]);

  useEffect(() => {
    fetchData();
  }, []);

  function renderListRequestedDanglingBlockItem(
    { item }: { item: RecordOf<TRequestedDanglingBlock> },
  ) {
    return (
      <ListRequestedDanglingBlock
        {...{
          item,
          userProfile,
        }}
      />
    );
  }

  return (
    <AnimatedFlatList
      data={storedRequestedBlocks?.toArray() || [] as any}
      extraData={storedRequestedBlocks || []}
      renderItem={renderListRequestedDanglingBlockItem as any}
      keyExtractor={(item: RecordOf<TRequestedDanglingBlock> | any) => item.get('_id')}
      ListEmptyComponent={<EmptyUI isLoading={requestedBlocks.loading} />}
      onRefresh={refetchHandler}
      refreshing={requestedBlocks.loading}
      scrollEventThrottle={16}
      onScroll={props.scrollPositionHandler}
      contentContainerStyle={{ paddingTop: HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT }}
    />
  );
}
