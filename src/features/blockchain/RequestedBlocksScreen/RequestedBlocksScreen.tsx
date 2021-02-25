import React from 'react';
import MainContainer from 'UI/MainContainer';
import Header from 'UI/Header/Header';
import ListRequestedDanglingBlocks from './container/ListRequestedDanglingBlocks';
import AnimatedMenuTray from './container/AnimatedMenuTray';

export default function RequestedBlocksScreen(props: any) {
  return (
    <MainContainer>
      <Header title="Requested Blocks" />
      <ListRequestedDanglingBlocks />
      <AnimatedMenuTray {...props} />
    </MainContainer>
  );
}
