import {compose , createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from "./root-saga";

import {rootReducer} from './root-reducer';
import {persistReducer, persistStore} from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [process.env.MODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean); // actions hit the middlewares before the reducers

const composeEnhancer = (process.env.MODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
