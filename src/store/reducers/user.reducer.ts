import { User } from 'generated/graphql';
import { USER_PROFILE } from 'store/actions/user.actions';
import { fromJS } from 'immutable';

export type UserAction = {
  type: typeof USER_PROFILE,
  payload: User
};

export default function userReducer(state = fromJS({}), action: UserAction) {
  switch (action.type) {
    case USER_PROFILE: {
      return state.set('userProfile', fromJS(action.payload));
    }
    default: {
      return state;
    }
  }
}
