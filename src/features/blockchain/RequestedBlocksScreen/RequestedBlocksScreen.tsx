import React, { useMemo } from 'react';
import MainContainer from 'UI/MainContainer';
import { Animated } from 'react-native';
import FadeInFadeOutAnimatedContainer from 'UI/FadeInFadeOutAnimatedContainer';
import TextUI from 'UI/TextUI';
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
      <FadeInFadeOutAnimatedContainer
        preAnimatedComponent={<TextUI style={{ fontSize: 30 }}>Shubham</TextUI>}
        postAnimatedComponent={<TextUI>Miguel</TextUI>}
        scrollY={scrollY}
      />
    </MainContainer>
  );
}
