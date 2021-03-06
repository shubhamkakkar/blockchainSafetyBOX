import { combineReducers } from 'redux-immutable';
import { Action, applyMiddleware, compose, createStore } from 'redux';
import userReducer from 'store/reducers/user.reducer';
import danglingBlocksReducer from 'store/reducers/danglingBlocks.reducer';
import publicLedgerReducer from 'store/reducers/publicLedger.reducer';
import shareBlocksReducer from 'store/reducers/shareBlocks.reducer';
import { USER_LOG_OUT } from 'store/actions/user.actions';

let composeEnhancers;
if (__DEV__) {
  composeEnhancers =
    (typeof window !== 'undefined' &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
} else {
  composeEnhancers = compose;
}

const appReducer = combineReducers({
  user: userReducer,
  danglingBlocks: danglingBlocksReducer,
  publicLedger: publicLedgerReducer,
  shareBlocks: shareBlocksReducer,
});

const rootReducer = <A extends Action>(state: any, action: A) => {
  if (action.type === USER_LOG_OUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

export default createStore(rootReducer, composeEnhancers(applyMiddleware()));
