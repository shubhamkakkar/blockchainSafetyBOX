import React, { useEffect, useMemo, useState } from 'react';
import { Animated, TouchableOpacity, ViewStyle } from 'react-native';
import {
  // @ts-ignore
  HEADER_MAX_HEIGHT_WITH_DESCRIPTION_COMPONENT,
  // @ts-ignore
  HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
  // @ts-ignore
  HEADER_MIN_HEIGHT_WITH_DESCRIPTION_COMPONENT,
  // @ts-ignore
  HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';
import { Navigation } from 'types';
import theme from 'theme';
import Icon from '../Icon';
import TextPoppins from '../TextUI';
import styles from './animatedHeader.styles';

interface Props extends Navigation {
  scrollY: Animated.Value;
  title: string;
  onBackClick?: () => void;
  titleImage?: string;
  titleRightIcon?: string;
  onTitleBarRightIconPress?: () => void;
  DescriptionComponent?: React.ReactElement | React.ReactElement[];
  descriptionComponentStyles?: ViewStyle
}

export default function AnimatedHeader({
  scrollY,
  navigation,
  onBackClick,
  title,
  titleImage,
  titleRightIcon,
  onTitleBarRightIconPress,
  DescriptionComponent,
  descriptionComponentStyles = {},
}: Props) {
  const HEADER_MAX_HEIGHT: number = useMemo(
    () => (DescriptionComponent
      ? HEADER_MAX_HEIGHT_WITH_DESCRIPTION_COMPONENT
      : HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT), [DescriptionComponent],
  );
  const HEADER_MIN_HEIGHT: number = useMemo(
    () => (DescriptionComponent
      ? HEADER_MIN_HEIGHT_WITH_DESCRIPTION_COMPONENT
      : HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT), [DescriptionComponent],
  );
  const HEADER_SCROLL_DISTANCE: number = useMemo(
    () => HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, [DescriptionComponent],
  );
  const [
    disableDescriptionContainerActions, setDisableDescriptionContainerActions,
  ] = useState<boolean>(false);

  useEffect(() => {
    scrollY.addListener(({ value }) => {
      setDisableDescriptionContainerActions(value >= HEADER_SCROLL_DISTANCE / 2);
    });

    return () => {
      scrollY.removeAllListeners();
    };
  }, []);

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const backButtonTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, DescriptionComponent ? 50 : 20, DescriptionComponent ? 90 : 40],
    extrapolate: 'clamp',
  });

  const searchBarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0, 0],
  });

  const titleContainerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, DescriptionComponent ? 50 : 0],
    extrapolate: 'clamp',
  });

  const titleTranslateX = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 20],
    extrapolate: 'clamp',
  });

  function goBack() {
    if (onBackClick) {
      onBackClick();
    } else {
      navigation.goBack();
    }
  }

  function onTitleBarRightIconPressHandler() {
    if (!disableDescriptionContainerActions && onTitleBarRightIconPress) {
      onTitleBarRightIconPress();
    }
  }

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: HEADER_MAX_HEIGHT,
          transform: [{ translateY: headerTranslateY }],
        }]}
    >
      <Animated.View
        style={{
          transform: [
            {
              translateY: backButtonTranslateY,
            },
          ],
        }}
      >
        <TouchableOpacity onPress={goBack} style={styles.goBackArrow}>
          <Icon
            name="chevron-left"
            style={styles.backBtnImage}
            size={30}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{
              translateY: titleContainerTranslateY,
            }],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.titleAndImageContainer,
            { transform: [{ translateX: titleTranslateX }] }]}
        >
          <TextPoppins
            style={styles.title}
          >
            {title}
          </TextPoppins>
          {titleImage && !disableDescriptionContainerActions && (
          <Icon
            name={titleImage}
            color={theme.DARK_PRIMARY}
          />
          )}
        </Animated.View>
        <TouchableOpacity onPress={onTitleBarRightIconPressHandler}>
          <Icon name="logout" size={25} color={theme.DARK_PRIMARY} />
        </TouchableOpacity>
      </Animated.View>
      {DescriptionComponent && !disableDescriptionContainerActions && (
        <Animated.View
          style={[descriptionComponentStyles, { opacity: searchBarOpacity }]}
        >
          {DescriptionComponent}
        </Animated.View>
      )}
    </Animated.View>
  );
}
