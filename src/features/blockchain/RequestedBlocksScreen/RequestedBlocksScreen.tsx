import React, { useMemo } from 'react';
import MainContainer from 'UI/MainContainer';
import AnimatedHeader from 'UI/AnimatedHeader';
import { Animated, View } from 'react-native';
import AnimatedTextHeader from 'UI/AnimatedTextHeader';
import Icon from 'UI/Icon';
import ListRequestedDanglingBlocks from './container/ListRequestedDanglingBlocks';
import AnimatedMenuTray from './container/AnimatedMenuTray';

export default function RequestedBlocksScreen(props: any) {
  const scrollY = useMemo(() => new Animated.Value(0), []);
  return (
    <MainContainer>
      <ListRequestedDanglingBlocks
        scrollPositionHandler={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
      <AnimatedMenuTray {...props} />
      <AnimatedHeader
        title="Requested Blocks"
        scrollY={scrollY}
        navigation={props.navigation}
      />
    </MainContainer>
  );
}
