import { TRequestedDanglingBlock } from 'generated/graphql';
import {
  addDanglingBlock,
  addMyDanglingBlock,
} from 'store/actions/danglingBlocks.actions';

export default function danglingBlockDispatchHandler(
  requestDanglingBlock:
    | ({ __typename?: 'TRequestedDanglingBlock' } & Pick<
        TRequestedDanglingBlock,
        '_id' | 'requestAt' | 'acceptCount' | 'rejectCount' | 'messageType'
      >)
    | undefined,
  userProfile: any,
  dispatch: any,
) {
  const block = {
    ...requestDanglingBlock,
    user: {
      firstName: userProfile.get('firstName'),
      lastName: userProfile.get('lastName'),
      middleName: userProfile.get('middleName'),
    },
  };
  dispatch(addDanglingBlock(block as TRequestedDanglingBlock));
  dispatch(addMyDanglingBlock(block as TRequestedDanglingBlock));
}
