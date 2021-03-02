import { TPublicLedger } from 'generated/graphql';

export const ADD_BLOCKS_TO_PUBLIC_LEDGER = '@BSB/publicLedger/addBlocksToPublicLedger';
export const ADD_BLOCK_TO_PUBLIC_LEDGER = '@BSB/publicLedger/addBlockToPublicLedger';

export function addBlocksToPublicLedger(payload: TPublicLedger[]) {
  return { type: ADD_BLOCKS_TO_PUBLIC_LEDGER, payload };
}

export function addBlockToPublicLedger(payload: TPublicLedger) {
  return { type: ADD_BLOCK_TO_PUBLIC_LEDGER, payload };
}
