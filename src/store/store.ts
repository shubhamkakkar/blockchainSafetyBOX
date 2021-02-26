import { combineReducers } from 'redux-immutable';
import {
  Action, applyMiddleware, compose, createStore,
} from 'redux';
import userReducer from 'store/reducers/user.reducer';
import danglingBlocksReducer from 'store/reducers/danglingBlocks.reducer';

let composeEnhancers;
if (__DEV__) {
  composeEnhancers = (typeof window !== 'undefined'
        // @ts-ignore
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
        || compose;
} else {
  composeEnhancers = compose;
}

const appReducer = combineReducers({
  user: userReducer,
  danglingBlocks: danglingBlocksReducer,
});

const rootReducer = <A extends Action>(state: any, action: A) => appReducer(state, action);

export default createStore(rootReducer, composeEnhancers(applyMiddleware()));
