import { fromJS } from 'immutable';
import { ADD_BLOCK_TO_SHARED_BLOCKS, ADD_BLOCKS_TO_SHARED_BLOCKS  } from 'store/actions/shareBlocks.actions';
import { SharedBlock } from 'generated/graphql';

type SharedBlocksActions = {
    type: typeof ADD_BLOCK_TO_SHARED_BLOCKS
        | typeof ADD_BLOCKS_TO_SHARED_BLOCKS,
    payload: SharedBlock | SharedBlock[]
};

export default function shareBlocksReducer(
    state = fromJS({}),
    action: SharedBlocksActions,
) {
    switch (action.type) {
        case ADD_BLOCKS_TO_SHARED_BLOCKS: {
            return state?.set('blocks', fromJS(action.payload));
        }
        case ADD_BLOCK_TO_SHARED_BLOCKS: {
            const existingBlocks = state?.get('blocks');
            if (existingBlocks) {
                return state?.updateIn(['blocks'], (list: any) => list.push(fromJS(action.payload)));
            }
            return state?.set('blocks', fromJS([action.payload]));
        }
        default: {
            return state;
        }
    }
}
