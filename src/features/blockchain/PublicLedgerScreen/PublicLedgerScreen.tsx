import React from 'react';
import { PublicLedgerNavigation } from 'navigationContainer/navigation';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';
import styles from './publicLedgerScreen.styles';

export default function PublicLedgerScreen({ navigation }: PublicLedgerNavigation) {
  return (
    <MainContainer style={styles.container}>
      <Header title="Public Ledger" />
    </MainContainer>
  );
}
