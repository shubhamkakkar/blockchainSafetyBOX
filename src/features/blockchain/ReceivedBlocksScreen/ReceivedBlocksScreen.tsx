import React from 'react';
import MainContainer from 'UI/MainContainer';
import { Animated } from "react-native";
import ListSharedBlocks
    from "features/blockchain/SharedBlocksScreen/container/ListShareBlocks/ListShareBlocks";
import AnimatedHeader from "UI/AnimatedHeader";
import { Navigation } from "types";

type Props = {

};
export default function ReceivedBlocksScreen(props: Navigation) {
    const scrollY = new Animated.Value(0);
    return (
        <MainContainer>
            <ListSharedBlocks
                scrollPositionHandler={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                navigation={props.navigation}
                isReceived
            />
            <AnimatedHeader
                title="Received Blocks"
                scrollY={scrollY}
                navigation={props.navigation}
            />
        </MainContainer>
    );
}
