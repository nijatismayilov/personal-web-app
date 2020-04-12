import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchAboutsStart } from './about/about.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchAboutsStart);

export default store;