import { fromJS } from 'immutable';
import {
  ADD_MY_REQUEST_DANGLING_BLOCK,
  ADD_REQUEST_DANGLING_BLOCK,
} from 'store/actions/danglingBlocks.actions';
import { TRequestedDanglingBlock } from 'generated/graphql';

type DanglingBlocksActions = {
  type: typeof ADD_REQUEST_DANGLING_BLOCK | typeof ADD_MY_REQUEST_DANGLING_BLOCK,
  payload: TRequestedDanglingBlock
};

export default function danglingBlocksReducer(
  state = fromJS({}),
  actions: DanglingBlocksActions,
) {
  switch (actions.type) {
    case ADD_REQUEST_DANGLING_BLOCK: {
      const existingRequestedBlocks = state.get('requestedBlocks');
      return state.set('requestedBlocks', fromJS(
        [...(existingRequestedBlocks || []), actions.payload],
      ));
    }
    case ADD_MY_REQUEST_DANGLING_BLOCK: {
      const existingMyRequestedBlocks = state.get('myRequestedBlocks');
      return state.set('myRequestedBlocks', fromJS(
        [...(existingMyRequestedBlocks || []), actions.payload],
      ));
    }
    default: {
      return state;
    }
  }
}
