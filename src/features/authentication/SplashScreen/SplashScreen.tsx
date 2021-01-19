import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import TextUI from 'UI/TextUI';
import blockchainLottieAnimation from './splash-screen-animation.json';
import styles from './splashScreen.styles';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView source={blockchainLottieAnimation} autoPlay loop />
      </View>
      <View style={styles.appNameContainer}>
        <TextUI style={styles.appNameText}>Blockchain Safety Box</TextUI>
      </View>
    </View>
  );
}
