import React, { useEffect, useMemo, useState } from 'react';
import { Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import {
    SharedBlock,
    useReceivedBlocksLazyQuery,
    useSharedBlocksLazyQuery
} from "generated/graphql";
import { HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT } from "constants";
import DecryptBlockInfoModal
    from "features/blockchain/PublicLedgerScreen/container/ListPublicLedger/DecryptBlockInfoModal";
import { MyBlockProps } from "types";
import navigationRouteNames from "navigationContainer/navigationRouteNames";
import EmptyUI from "UI/EmptyUI";
import SharedBlockListItem from './SharedBlockListItem'
import ReceiveBlockInfoModal from './ReceiveBlockInfoModal';


type Props = {
    scrollPositionHandler: (_event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    navigation: any
    isReceived?: boolean
};

export default function ListShareBlocks(props: Props) {
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList) as any;
    const [toDecryptBlock, setToDecryptBlock] = useState<SharedBlock | undefined>(undefined);
    const [sharedBlock, sharedBlockResponse ] = (props.isReceived ? useReceivedBlocksLazyQuery : useSharedBlocksLazyQuery)()
    const infoIconAnimation = useMemo(() => new Animated.Value(0), []);
    // @ts-ignore
    const blocksResponseIdentifier = props.isReceived ? sharedBlockResponse.data?.receivedBlocks : sharedBlockResponse.data?.sharedBlocks
    const infoIconTranslateY = infoIconAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, -5],
    });


    function onInfoIconPress(block: SharedBlock) {
        setToDecryptBlock(block);
    }

    function onDecryptBlockInfoModalClose() {
        setToDecryptBlock(undefined);
    }

    function onSuccess(block: MyBlockProps, showShare = true) {
        onDecryptBlockInfoModalClose();
        props.navigation.navigate(navigationRouteNames.MyBlockScreen, { block, showShare });
    }
    function refetchHandler() {
        if (sharedBlockResponse && sharedBlockResponse.refetch) {
            sharedBlockResponse.refetch();
        }
    }

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

    useEffect(() => {
        triggerAnimation();
        sharedBlock();
    }, [])


    const memorizedFlatList = useMemo(() => (
        <AnimatedFlatList
            data={blocksResponseIdentifier || []}
            extraData={blocksResponseIdentifier || []}
            keyExtractor={(item: SharedBlock) => item._id}
            renderItem={({ item, index }: {item: SharedBlock, index: number} ) => (
                <SharedBlockListItem
                    item={item}
                    prevDate={index >= 1
                        ? blocksResponseIdentifier[index - 1].sharedAt
                        : undefined}
                    infoIconTranslateY={infoIconTranslateY}
                    onInfoIconPressHandler={onInfoIconPress}
                    isReceived={props.isReceived || false}
                />
            )}
            scrollEventThrottle={16}
            onScroll={props.scrollPositionHandler}
            contentContainerStyle={{ flex: 1, paddingTop: HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT }}
            onRefresh={refetchHandler}
            refreshing={sharedBlockResponse.loading}
            ListEmptyComponent={<EmptyUI isLoading={sharedBlockResponse.loading} />}
        />
    ), [blocksResponseIdentifier]);
    return (
        <>
            {memorizedFlatList}
            {!props.isReceived && !!toDecryptBlock
            && (
                <DecryptBlockInfoModal
                    isOpen={!!toDecryptBlock}
                    toDecryptBlock={toDecryptBlock as any}
                    onClose={onDecryptBlockInfoModalClose}
                    onSuccessHandler={onSuccess}
                />
            )}
            {props.isReceived && !!toDecryptBlock
            && (
                <ReceiveBlockInfoModal
                    isOpen={!!toDecryptBlock}
                    blockId={toDecryptBlock._id}
                    onClose={onDecryptBlockInfoModalClose}
                    onSuccessHandler={onSuccess}
                />
            )}
        </>
    );
}
