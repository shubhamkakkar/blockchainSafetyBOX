import React, { useEffect } from 'react';
import {
  Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
// @ts-ignore
import { HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT } from 'constants';
import { TPublicLedger, usePublicLedgerQuery } from 'generated/graphql';
import { addBlocksToPublicLedger } from 'store/actions/publicLedger.actions';
import { publicLedgerBlocks } from 'store/selectors/publicLedger.selector';
import PublicLedgerBlock from './PublicLedgerBlock';

type Props = {
  scrollPositionHandler: (_event: NativeSyntheticEvent<NativeScrollEvent>) => void
};
export default function ListPublicLedger(props: Props) {
  const publicLedgerResponse = usePublicLedgerQuery();
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const storedPublicLedgerBlocks = useSelector(publicLedgerBlocks);

  function renderPublicLedgerBlock({ item }: any) {
    return (
      <PublicLedgerBlock
        item={item}
        userId={userProfile?.get('_id')}
      />
    );
  }

  useEffect(() => {
    if (publicLedgerResponse.called
            && !publicLedgerResponse.error
            && !publicLedgerResponse.loading
            && publicLedgerResponse.data?.publicLedger
    ) {
      dispatch(addBlocksToPublicLedger(publicLedgerResponse.data.publicLedger as TPublicLedger[]));
    }
  }, [publicLedgerResponse]);

  return (
    <AnimatedFlatList
      data={storedPublicLedgerBlocks?.toArray() || []}
      extraData={storedPublicLedgerBlocks?.toArray() || []}
      keyExtractor={(item: Map<TPublicLedger, any> | any) => item?.get('_id')}
      renderItem={renderPublicLedgerBlock as any}
      scrollEventThrottle={16}
      onScroll={props.scrollPositionHandler}
      contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT }}
    />
  );
}
