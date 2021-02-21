import React from 'react';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';
import styles from './publicLedgerScreen.styles';

export default function PublicLedgerScreen() {
  return (
    <MainContainer style={styles.container}>
      <Header title="Public Ledger" />
    </MainContainer>
  );
}
