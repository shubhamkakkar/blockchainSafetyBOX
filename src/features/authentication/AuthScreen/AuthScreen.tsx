import React, { useState } from 'react';
import MainContainer from 'UI/MainContainer';
import { View } from 'react-native';
import AuthenticationForm from 'features/authentication/AuthScreen/container/AuthenticationForm';
import Button from 'UI/Buttons';
import theme from 'theme';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import TextUI from 'UI/TextUI';
import { AuthScreenNavigation } from 'navigationContainer/navigation';
import styles from './authScreen.styles';

export default function AuthScreen({ navigation }: AuthScreenNavigation) {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  function toggleAuthenticationForm() {
    setIsLogin(!isLogin);
  }

  function goTo(screen: 'PublicLedger' | 'PrivateKeyDownloadScreen', params?: any) {
    navigation.navigate(screen, params);
  }

  return (
    <MainContainer style={styles.flex}>
      <View style={styles.spacer} />
      <View style={styles.arcBackground} />
      <View style={styles.formContainer}>
        <View style={styles.formCardContainer}>
          <View>
            <TextUI style={styles.headerTitle}>
              Hello
            </TextUI>
            <TextUI>
              { isLogin ? 'It\'s good to have you back!' : 'Hey, Welcome, Let\'s onboard '}
            </TextUI>
          </View>
          <AuthenticationForm {...{ isLogin, goTo }} />
          <View style={styles.switchFormTypeContainer}>
            <Button
              style={styles.switchFormButton}
              title={`${isLogin ? 'Sign Up' : 'Log In'} ?`}
              onPress={toggleAuthenticationForm}
              titleColor={theme.PRIMARY}
              fontWeight="Medium"
              fontSize={FONT_SIZES.SMALL_TEXT_ALTERNATE}
            />
          </View>
        </View>
      </View>
      <View style={styles.spacer} />
    </MainContainer>
  );
}
