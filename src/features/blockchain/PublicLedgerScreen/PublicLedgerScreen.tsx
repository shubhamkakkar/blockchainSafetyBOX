import React from 'react';
import MainContainer from 'UI/MainContainer';
import { Animated } from 'react-native';
import AnimatedTextHeader from 'UI/AnimatedTextHeader';
import ListPublicLedger from './container/ListPublicLedger';
import styles from './publicLedgerScreen.styles';

export default function PublicLedgerScreen(props: any) {
  const scrollY = new Animated.Value(0);
  return (
    <MainContainer style={styles.container}>
      <ListPublicLedger
        scrollPositionHandler={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
      <AnimatedTextHeader
        initialTitle="Public Ledger"
        onAnimationCompleteTitle="Public Ledger On Animation Complete"
        scrollY={scrollY}
        navigation={props.navigation}
      />
    </MainContainer>
  );
}
