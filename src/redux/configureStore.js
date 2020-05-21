import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
/**
 * In production grade app I would set up different environments
 * and load redux dev rools only for dev environment
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export default configureStore;
