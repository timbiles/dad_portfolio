import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './requestReducer';

const middlewares = applyMiddleware(promiseMiddleware());


const store = createStore(reducer, middlewares);

export default store;
