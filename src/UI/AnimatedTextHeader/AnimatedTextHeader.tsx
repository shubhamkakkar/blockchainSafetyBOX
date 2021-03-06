import React, { useEffect, useMemo, useState } from 'react';
import {
  Animated, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import Icon from 'UI/Icon';
import TextUI from 'UI/TextUI';
import { Navigation } from 'types';
import {
  // @ts-ignore
  HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT, HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';
import styles from './animatedTextHeader.styles';

interface Props extends Partial<Navigation> {
  initialTitle: string;
  onAnimationCompleteTitle: string;
  subTitle?: string;
  onBackClick?: () => void;
  noBackButton? : boolean;
  containerStyles?: ViewStyle;
  textContainerStyle?: ViewStyle;
  scrollY: Animated.Value;
  RightContainer?: React.ReactElement | React.ReactElement[]
  rightContainerStyle?: ViewStyle
}

export default function AnimatedTextHeader(props: Props) {
  const {
    initialTitle,
    onAnimationCompleteTitle,
    subTitle,
    noBackButton,
    navigation,
    scrollY,
    RightContainer,
    rightContainerStyle = {},
    containerStyles = {},
    textContainerStyle = {},
  } = props;
  const HEADER_SCROLL_DISTANCE: number = useMemo(
    () => HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT
        - HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT, [],
  );
  const [
    isAnimationHalfComplete, setIsAnimationHalfComplete,
  ] = useState<boolean>(false);

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      setIsAnimationHalfComplete(value >= HEADER_SCROLL_DISTANCE / 2);
    });

    return () => {
      scrollY.removeAllListeners();
    };
  }, []);

  const goBack = () => (props.onBackClick ? props.onBackClick() : navigation.goBack());

  return (
    <View style={[
      styles.headerContainer,
      containerStyles,
      { height: HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT },
    ]}
    >
      <View style={[styles.textContainerStyle, styles.allCenter, textContainerStyle]}>
        <TextUI fontWeight="Bold" style={styles.headerTitle}>
          {isAnimationHalfComplete ? onAnimationCompleteTitle : initialTitle}
        </TextUI>
        {
            !!subTitle && !isAnimationHalfComplete
            && <TextUI style={styles.headerSubTitle}>{subTitle}</TextUI>
        }
      </View>
      {!noBackButton && (
      <TouchableOpacity onPress={goBack} style={styles.goBackButton}>
        <Icon
          style={styles.leftIconStyle}
          name="chevron-left"
          size={30}
        />
      </TouchableOpacity>
      )}
      {!!RightContainer && (
      <View style={[styles.rightContainerStyle, rightContainerStyle]}>
        {RightContainer}
      </View>
      )}
    </View>
  );
}
