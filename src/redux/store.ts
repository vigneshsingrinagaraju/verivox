import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import {
  initialTariffState,
  tariffListReducer,
} from './reducers/TariffListReducer';
import AppState from './state/AppState';

 
const reducer = combineReducers({
    tariffListState: tariffListReducer,
});

export default function configureStore(preloadedState: any) {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  //to use thunk & devTools
  const enhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, enhancer);
  return store;
}


export const initialAppState: AppState = {
    tariffListState: initialTariffState,
};

export const store = configureStore(initialAppState);
