import React from 'react';
import { View } from 'react-native';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';

type Props = {

};
export default function RequestedBlocksScreen(props: Props) {
  return (
    <MainContainer>
      <Header title="Requested Blocks" />
    </MainContainer>
  );
}
