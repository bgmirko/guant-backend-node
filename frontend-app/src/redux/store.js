import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { loadState, saveState } from './storage';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import throttle from 'lodash/throttle';

export const initializeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const persistedState = loadState();
    const store = createStore(
        rootReducer,
        persistedState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    sagaMiddleware.run(rootSaga);
    return store;
};