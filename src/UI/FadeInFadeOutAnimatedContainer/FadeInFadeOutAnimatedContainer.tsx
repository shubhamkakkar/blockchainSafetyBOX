import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import {
  // @ts-ignore
  HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
  // @ts-ignore
  HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';
import styles from './fadeInFadeOutAnimatedContainer.styles';

type Props = {
  preAnimatedComponent: React.ReactElement;
  postAnimatedComponent: React.ReactElement;
  scrollY: Animated.Value
};
export default function FadeInFadeOutAnimatedContainer(props: Props) {
  const HEADER_SCROLL_DISTANCE: number = useMemo(
    () => HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT
            - HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT, [],
  );

  const preAnimatedComponentOpacity = props.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 4],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const postAnimatedComponentOpacity = props.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const postAnimatedComponentTranslateY = props.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [-HEADER_SCROLL_DISTANCE / 4, HEADER_SCROLL_DISTANCE / 2],
    extrapolate: 'clamp',
  });

  const headerTranslateY = props.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[
      styles.container,
      {
        height: HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
        transform: [{ translateY: headerTranslateY }],
      },

    ]}
    >
      <Animated.View style={{
        opacity: preAnimatedComponentOpacity,
      }}
      >
        {props.preAnimatedComponent}
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: 100,
          elevation: 100,
          opacity: postAnimatedComponentOpacity,
          transform: [{ translateY: postAnimatedComponentTranslateY }],
        }}
      >
        {props.postAnimatedComponent}
      </Animated.View>
    </Animated.View>
  );
}
