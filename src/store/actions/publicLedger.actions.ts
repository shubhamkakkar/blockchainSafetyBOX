import { TPublicLedger } from 'generated/graphql';

export const ADD_BLOCKS_TO_PUBLIC_LEDGER = '@BSB/publicLedger/addBlocksToPublicLedger';

export function addBlocksToPublicLedger(payload: TPublicLedger[]) {
  return { type: ADD_BLOCKS_TO_PUBLIC_LEDGER, payload };
}
