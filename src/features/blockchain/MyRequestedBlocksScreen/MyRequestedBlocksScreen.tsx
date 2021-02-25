import MainContainer from 'UI/MainContainer';
import React from 'react';
import { Animated } from 'react-native';
import AnimatedHeader from 'UI/AnimatedHeader';
import AnimatedMenuTray from '../RequestedBlocksScreen/container/AnimatedMenuTray';
import ListRequestedDanglingBlocks
  from '../RequestedBlocksScreen/container/ListRequestedDanglingBlocks';

export default function MyRequestedBlocksScreen(props: any) {
  const scrollY = new Animated.Value(0);
  return (
    <MainContainer>
      <ListRequestedDanglingBlocks
        isUserOnly
        scrollPositionHandler={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
      <AnimatedMenuTray {...props} isUserOnly />
      <AnimatedHeader
        title="My Requested Blocks"
        scrollY={scrollY}
        navigation={props.navigation}
      />
    </MainContainer>
  );
}
