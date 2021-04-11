import React from 'react';
import MainContainer from 'UI/MainContainer';
import AnimatedHeader from "UI/AnimatedHeader";
import { Animated } from "react-native";
import { Navigation } from "types";
import ListSharedBlocks from "./container/ListShareBlocks";

export default function SharedBlocksScreen(props: Navigation) {
    const scrollY = new Animated.Value(0);
    return (
    <MainContainer>
        <ListSharedBlocks
            scrollPositionHandler={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true },
            )}
            navigation={props.navigation}
        />
        <AnimatedHeader
            title="Shared Blocks"
            scrollY={scrollY}
            navigation={props.navigation}
        />
    </MainContainer>
  );
}
