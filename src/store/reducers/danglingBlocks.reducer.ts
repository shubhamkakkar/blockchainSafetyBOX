import { fromJS } from 'immutable';
import {
  ADD_MY_REQUEST_DANGLING_BLOCK,
  ADD_MY_REQUESTED_DANGLING_BLOCKS,
  ADD_REQUEST_DANGLING_BLOCK,
  ADD_REQUESTED_DANGLING_BLOCKS,
} from 'store/actions/danglingBlocks.actions';
import { TRequestedDanglingBlock } from 'generated/graphql';

type DanglingBlocksActions = {
  type: typeof ADD_REQUEST_DANGLING_BLOCK
  | typeof ADD_MY_REQUEST_DANGLING_BLOCK
  | typeof ADD_REQUESTED_DANGLING_BLOCKS
  | typeof ADD_MY_REQUESTED_DANGLING_BLOCKS,
  payload: TRequestedDanglingBlock | TRequestedDanglingBlock[]
};
export default function danglingBlocksReducer(
  state = fromJS({}),
  action: DanglingBlocksActions,
) {
  switch (action.type) {
    case ADD_REQUEST_DANGLING_BLOCK: {
      const existingRequestedBlocks = state?.get('requestedBlocks');
      return state?.set('requestedBlocks', fromJS(
        [...(existingRequestedBlocks || []), action.payload],
      ));
    }
    case ADD_REQUESTED_DANGLING_BLOCKS: {
      return state?.set('requestedBlocks', fromJS(action.payload));
    }
    case ADD_MY_REQUEST_DANGLING_BLOCK: {
      const existingMyRequestedBlocks = state?.get('myRequestedBlocks');
      return state?.set('myRequestedBlocks', fromJS(
        [...(existingMyRequestedBlocks || []), action.payload],
      ));
    }
    case ADD_MY_REQUESTED_DANGLING_BLOCKS: {
      return state?.set('myRequestedBlocks', fromJS(action.payload));
    }
    default: {
      return state;
    }
  }
}
