import { applyMiddleware, createStore, Reducer } from 'redux';
import { apiCallMiddleware } from './apiCallMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [apiCallMiddleware()];
const store = (root: Reducer) =>
  createStore(root, composeWithDevTools(applyMiddleware(...middlewares)));

export { store };
