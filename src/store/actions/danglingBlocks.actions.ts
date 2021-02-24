import { TRequestedDanglingBlock } from 'generated/graphql';

export const ADD_REQUEST_DANGLING_BLOCK = '@BSB/danglingBlocks/addRequestDanglingBlock';
export const ADD_REQUESTED_DANGLING_BLOCKS = '@BSB/danglingBlocks/addRequestedDanglingBlocks';
export const ADD_MY_REQUEST_DANGLING_BLOCK = '@BSB/danglingBlocks/addMyRequestDanglingBlock';
export const ADD_MY_REQUESTED_DANGLING_BLOCKS = '@BSB/danglingBlocks/addMyRequestedDanglingBlocks';

export function addDanglingBlocks(payload: TRequestedDanglingBlock[]) {
  return { type: ADD_REQUESTED_DANGLING_BLOCKS, payload };
}

export function addDanglingBlock(payload: TRequestedDanglingBlock) {
  return { type: ADD_REQUEST_DANGLING_BLOCK, payload };
}

export function addMyDanglingBlocks(payload: TRequestedDanglingBlock[]) {
  return { type: ADD_MY_REQUESTED_DANGLING_BLOCKS, payload };
}

export function addMyDanglingBlock(payload: TRequestedDanglingBlock) {
  return { type: ADD_MY_REQUEST_DANGLING_BLOCK, payload };
}
