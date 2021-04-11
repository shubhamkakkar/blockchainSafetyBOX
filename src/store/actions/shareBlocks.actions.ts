import { SharedBlock } from 'generated/graphql';

export const ADD_BLOCKS_TO_SHARED_BLOCKS = '@BSB/sharedBlock/addBlocksToShareBlocks';
export const ADD_BLOCK_TO_SHARED_BLOCKS = '@BSB/sharedBlock/addBlockToShareBlocks';

export function addBlocksToSharedBlocks(payload: SharedBlock[]) {
    return { type: ADD_BLOCKS_TO_SHARED_BLOCKS, payload };
}

export function addBlockToSharedBlocks(payload: SharedBlock) {
    return { type: ADD_BLOCK_TO_SHARED_BLOCKS, payload };
}
