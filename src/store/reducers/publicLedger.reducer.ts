import { fromJS } from 'immutable';
import { ADD_BLOCKS_TO_PUBLIC_LEDGER, ADD_BLOCK_TO_PUBLIC_LEDGER } from 'store/actions/publicLedger.actions';
import { TPublicLedger } from 'generated/graphql';

type PublicLedgerActions = {
  type: typeof ADD_BLOCKS_TO_PUBLIC_LEDGER
  | typeof ADD_BLOCK_TO_PUBLIC_LEDGER,
  payload: TPublicLedger | TPublicLedger[]
};

export default function publicLedgerReducer(
  state = fromJS({}),
  actions: PublicLedgerActions,
) {
  switch (actions.type) {
    case ADD_BLOCKS_TO_PUBLIC_LEDGER: {
      return state.set('blocks', fromJS(actions.payload));
    }
    case ADD_BLOCK_TO_PUBLIC_LEDGER: {
      const existingBlocks = state.get('blocks');
      if (existingBlocks) {
        return state.updateIn(['blocks'], (list) => list.push(fromJS(action.payload)));
      }
      return state.set('blocks', fromJS([action.payload]));
    }
    default: {
      return state;
    }
  }
}
