import Header from 'UI/Header';
import MainContainer from 'UI/MainContainer';
import React from 'react';
import AnimatedMenuTray from '../RequestedBlocksScreen/container/AnimatedMenuTray';
import ListRequestedDanglingBlocks
  from '../RequestedBlocksScreen/container/ListRequestedDanglingBlocks';

export default function MyRequestedBlocksScreen(props: any) {
  return (
    <MainContainer>
      <Header title="My Requested Blocks" />
      <ListRequestedDanglingBlocks isUserOnly />
      <AnimatedMenuTray {...props} isUserOnly />
    </MainContainer>
  );
}
