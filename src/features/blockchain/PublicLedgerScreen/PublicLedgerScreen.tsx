import React from 'react';
import MainContainer from 'UI/MainContainer';
import { Animated } from 'react-native';
import AnimatedHeader from 'UI/AnimatedHeader';
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
        navigation={props.navigation}
      />
      <AnimatedHeader
        title="Public Ledger"
        scrollY={scrollY}
        navigation={props.navigation}
        hideBackButton
      />
    </MainContainer>
  );
}
