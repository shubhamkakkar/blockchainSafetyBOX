import React, { useEffect, useMemo, useState } from 'react';
import {
  Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
// @ts-ignore
import { HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT, USER_ROLE_TYPE } from 'constants';
import { TPublicLedger, usePublicLedgerQuery } from 'generated/graphql';
import { addBlocksToPublicLedger } from 'store/actions/publicLedger.actions';
import { publicLedgerBlocks } from 'store/selectors/publicLedger.selector';
import DecryptBlockInfoModal
  from 'features/blockchain/PublicLedgerScreen/container/ListPublicLedger/DecryptBlockInfoModal';
import { PublicLedgerScreenNavigationProps } from 'navigationContainer/navigation';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import { DecryptBlock, MyBlockProps } from 'types';
import PublicLedgerBlock from './PublicLedgerBlock';
import EmptyUI from 'UI/EmptyUI';

type Props = {
  scrollPositionHandler: (_event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  navigation: PublicLedgerScreenNavigationProps['navigation']
};

export default function ListPublicLedger(props: Props) {
  const publicLedgerResponse = usePublicLedgerQuery();
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const storedPublicLedgerBlocks = useSelector(publicLedgerBlocks);
  const infoIconAnimation = useMemo(() => new Animated.Value(0), []);
  const [toDecryptBlock, setToDecryptBlock] = useState<DecryptBlock | undefined>(undefined);
  function triggerAnimation() {
    Animated.timing(infoIconAnimation, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start(() => {
      Animated.timing(infoIconAnimation, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }).start(triggerAnimation);
    });
  }

  function onInfoIconPress(block: DecryptBlock) {
    setToDecryptBlock(block);
  }

  function onDecryptBlockInfoModalClose() {
    setToDecryptBlock(undefined);
  }

  const infoIconTranslateY = infoIconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [15, -5],
  });

  useEffect(() => {
    if (publicLedgerResponse.called
        && !publicLedgerResponse.error
        && !publicLedgerResponse.loading
        && publicLedgerResponse.data?.publicLedger
    ) {
      triggerAnimation();
      dispatch(addBlocksToPublicLedger(publicLedgerResponse.data.publicLedger as TPublicLedger[]));
    }
  }, [publicLedgerResponse]);

  function onSuccess(block: MyBlockProps) {
    onDecryptBlockInfoModalClose();
    props.navigation.navigate(navigationRouteNames.MyBlockScreen, { block });
  }

  function refetchHandler() {
    if (publicLedgerResponse && publicLedgerResponse.refetch) {
      publicLedgerResponse.refetch();
    }
  }

  function renderPublicLedgerBlock({ item, index }: any) {
    return (
      <PublicLedgerBlock
        item={item}
        userId={userProfile?.get('_id')}
        isAdmin={userProfile?.get('role') === USER_ROLE_TYPE.ADMIN}
        prevDate={index >= 1
          ? storedPublicLedgerBlocks?.toArray()[index - 1].get('createdAt')
          : undefined}
        infoIconTranslateY={infoIconTranslateY}
        onInfoIconPressHandler={onInfoIconPress}
      />
    );
  }

  const memorizedFlatList = useMemo(() => (
    <AnimatedFlatList
      data={storedPublicLedgerBlocks?.toArray() || []}
      extraData={storedPublicLedgerBlocks?.toArray() || []}
      keyExtractor={(item: Map<TPublicLedger, any> | any) => item?.get('_id')}
      renderItem={renderPublicLedgerBlock as any}
      scrollEventThrottle={16}
      onScroll={props.scrollPositionHandler}
      contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT }}
      onRefresh={refetchHandler}
      refreshing={publicLedgerResponse.loading}
      ListEmptyComponent={<EmptyUI isLoading={publicLedgerResponse.loading} />}
    />
  ), [storedPublicLedgerBlocks]);

  return (
    <>
      {memorizedFlatList}
      { !!toDecryptBlock
        && (
        <DecryptBlockInfoModal
          isOpen={!!toDecryptBlock}
          toDecryptBlock={toDecryptBlock}
          onClose={onDecryptBlockInfoModalClose}
          onSuccessHandler={onSuccess}
        />
        )}
    </>
  );
}
