import React from 'react';
import { View } from 'react-native';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';

type Props = {

};
export default function SharedBlocksScreen(props: Props) {
  return (
    <MainContainer>
      <Header title="Shared Blocks" />
    </MainContainer>
  );
}
