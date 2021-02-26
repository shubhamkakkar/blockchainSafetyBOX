import { User } from 'generated/graphql';
import { USER_LOG_OUT, USER_PROFILE } from 'store/actions/user.actions';
import { fromJS } from 'immutable';
import request from 'utils/request';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserAction = {
  type: typeof USER_PROFILE | typeof USER_LOG_OUT,
  payload: User
};
const initialState = fromJS({});
export default function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case USER_PROFILE: {
      return state.set('userProfile', fromJS(action.payload));
    }
    case USER_LOG_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
