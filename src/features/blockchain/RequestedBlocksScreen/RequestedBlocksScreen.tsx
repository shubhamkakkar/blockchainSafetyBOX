import React from 'react';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';
import ListRequestedDanglingBlocks from './container/ListRequestedDanglingBlocks';

export default function RequestedBlocksScreen() {
  return (
    <MainContainer>
      <Header title="Requested Blocks" />
      <ListRequestedDanglingBlocks />
    </MainContainer>
  );
}
