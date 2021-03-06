import React from 'react';
import MainContainer from 'UI/MainContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from 'store/selectors/user.selectors';
import LayoutAnimationWrapper from 'UI/LayoutAnimationWrapper';
import KeyValuePairRow from 'UI/KeyValuePairRow';
import { Animated, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import ImageLinks from 'ImageLinks';
import Button from 'UI/Buttons';
import theme from 'theme';
import AnimatedHeader from 'UI/AnimatedHeader';
import { Navigation } from 'types';
import { userLogout } from 'store/actions/user.actions';
import navigationRouteNames from 'navigationContainer/navigationRouteNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import request from 'utils/request';
// @ts-ignore
import { ASYNC_STORAGE_KEYS } from 'constants';
import { CommonActions } from '@react-navigation/native';
import TextUI from 'UI/TextUI';
import styles from './userProfileScreen.styles';

export default function UserProfileScreen({ navigation }: Navigation) {
  const scrollY = new Animated.Value(0);
  const userProfile = useSelector(selectUserProfile);
  console.log('userProfile', userProfile);
  const dispatch = useDispatch();

  async function onLogoutPress() {
    await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.AUTH_TOKEN);
    request.token = '';
    dispatch(userLogout());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: navigationRouteNames.AuthScreen }],
      }),
    );
  }

  return (
    <MainContainer>
      <Animated.ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        <View style={[styles.flex, styles.allCenter, styles.lottieContainer]}>
          <AnimatedLottieView
            style={styles.lottie}
            source={ImageLinks.userProfileLottieAnimation}
            loop={false}
            cacheStrategy="strong"
            autoPlay
          />
        </View>
        <View style={styles.flex}>
          <LayoutAnimationWrapper title="Profile Information" expanded>
            <KeyValuePairRow label="First name" value={userProfile?.get('firstName')} />
            <KeyValuePairRow label="Middle name" value={userProfile?.get('middleName')} />
            <KeyValuePairRow label="Last name" value={userProfile?.get('lastName')} />
            <LayoutAnimationWrapper
              title="Public Key"
              buttonTitleStyle={styles.publicKeyTitleStyle}
            >
              <TextUI>
                {userProfile?.get('publicKey')}
              </TextUI>
            </LayoutAnimationWrapper>
          </LayoutAnimationWrapper>
        </View>
      </Animated.ScrollView>
      <View style={[styles.allCenter, styles.buttonContainer]}>
        <Button
          style={styles.buttonPadding}
          title="Logout"
          rightIcon={{
            name: 'logout',
            color: theme.WHITE,
          }}
          onPress={onLogoutPress}
        />
      </View>
      <AnimatedHeader
        title="User Profile"
        scrollY={scrollY}
        isRightIcon={false}
        navigation={navigation}
      />
    </MainContainer>
  );
}
