import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import MainContainer from 'UI/MainContainer';
import AnimatedTextHeader from 'UI/AnimatedTextHeader';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import { MyBLockScreenNavigationProps } from 'navigationContainer/navigation';
import Icon from 'UI/Icon';
import theme from 'theme';

export default function MyBlockScreen(props: MyBLockScreenNavigationProps) {
  const scrollY = new Animated.Value(0);
  function onBackClick() {
    props.navigation.navigate(navigationRouteNames.PublicLedgerScreen);
  }

  function onUserProfileIconPress() {
    props.navigation.navigate(navigationRouteNames.UserProfileScreen);
  }

  return (
    <MainContainer>
      <AnimatedTextHeader
        initialTitle="My Block"
        onAnimationCompleteTitle="MESSAGE TYPE"
        scrollY={scrollY}
        onBackClick={onBackClick}
        RightContainer={(
          <TouchableOpacity
            onPress={onUserProfileIconPress}
          >
            <Icon name="account-settings" size={25} color={theme.DARK_PRIMARY} />
          </TouchableOpacity>
)}
      />
    </MainContainer>
  );
}
