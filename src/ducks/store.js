import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './requestReducer';
import eventReducer from './eventsReducer';

const combinedReducers = combineReducers({ reducer, eventReducer });

const middlewares = applyMiddleware(promiseMiddleware());

const store = createStore(combinedReducers, middlewares);

export default store;
