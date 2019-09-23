import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import reducer from './reducer';

// const middleware = [logger];
// const store = createStore(reducer, applyMiddleware(...middleware))

// you can do this and pass in applyMiddleware,
// but for now i will make like this until problems occur.

export const store = createStore(reducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default {store, persistor};