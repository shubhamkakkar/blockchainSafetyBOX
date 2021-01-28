import { TRequestedDanglingBlock } from 'generated/graphql';

export const ADD_REQUEST_DANGLING_BLOCK = '@BSB/danglingBlocks/addRequestDanglingBlock';
export const ADD_MY_REQUEST_DANGLING_BLOCK = '@BSB/danglingBlocks/addMyRequestDanglingBlock';

export function addDanglingBlock(payload: TRequestedDanglingBlock) {
  return { type: ADD_REQUEST_DANGLING_BLOCK, payload };
}

export function addMyDanglingBlock(payload: TRequestedDanglingBlock) {
  return { type: ADD_MY_REQUEST_DANGLING_BLOCK, payload };
}
