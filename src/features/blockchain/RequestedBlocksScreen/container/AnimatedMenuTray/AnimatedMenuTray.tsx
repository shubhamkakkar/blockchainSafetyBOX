import React, { useMemo, useState } from 'react';
import {
  Animated, Easing, TouchableOpacity, View,
} from 'react-native';
import Icon from 'UI/Icon';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import styles from './animatedTray.styles';

type Props = {
  navigation: any,
  isUserOnly?: boolean
};

export default function AnimatedMenuTray(
  props: Props,
) {
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  const addIconOpacity = useMemo(() => new Animated.Value(0), []);

  function animatedMenuOptions(toValue = 0, cb?: () => void) {
    Animated.timing(addIconOpacity, {
      toValue,
      useNativeDriver: true,
      easing: Easing.ease,
    })
      .start(() => {
        setIsAnimationComplete(!isAnimationComplete);
        if (cb) {
          cb();
        }
      });
  }

  function onMenuIconPress() {
    if (isAnimationComplete) {
      animatedMenuOptions();
    } else {
      animatedMenuOptions(1);
    }
  }

  function navigateToRequestedDanglingBlocks() {
    animatedMenuOptions(
      0,
      () => props.navigation.navigate(
        props.isUserOnly
          ? navigationRouteNames.RequestedBlocksScreen
          : navigationRouteNames.MyRequestedBlocksScreen,
      ),
    );
  }

  function navigateToMedicalForms() {
    animatedMenuOptions(
      0,
      () => props.navigation.navigate(navigationRouteNames.MedicalFormsTopBarNavigation),
    );
  }

  const addIconTranslateY = addIconOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [60, 0],
    extrapolate: 'clamp',
  });

  const myDanglingBlocksNavigationIconTranslateY = addIconOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0],
    extrapolate: 'clamp',
  });

  const myDanglingBlocksNavigationIconOpacity = addIconOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const menuIconRotateX = addIconOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  return (
    <View style={styles.menuContainer}>
      <Animated.View style={[
        styles.buttonContainer,
        {
          opacity: myDanglingBlocksNavigationIconOpacity,
          transform: [{ translateY: myDanglingBlocksNavigationIconTranslateY }],
        },
      ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={navigateToRequestedDanglingBlocks}
          disabled={!isAnimationComplete}
        >
          <Icon
            size={25}
            name={props.isUserOnly ? 'account-group' : 'human-greeting'}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: addIconOpacity,
            transform: [{ translateY: addIconTranslateY }],
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={navigateToMedicalForms}
          disabled={!isAnimationComplete}
        >
          <Icon size={30} name="plus" style={styles.buttonIcon} />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.buttonContainer}
        onPress={onMenuIconPress}
      >
        <Animated.View style={{ transform: [{ rotate: menuIconRotateX }] }}>
          <Icon name="menu-up" size={40} style={styles.buttonIcon} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
