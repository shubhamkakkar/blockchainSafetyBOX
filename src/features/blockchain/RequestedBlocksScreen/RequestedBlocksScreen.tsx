import React from 'react';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';
import ListRequestedDanglingBlocks from './container/ListRequestedDanglingBlocks';

type Props = {};
export default function RequestedBlocksScreen(props: Props) {
  return (
    <MainContainer>
      <Header title="Requested Blocks" />
      <ListRequestedDanglingBlocks />
    </MainContainer>
  );
}
