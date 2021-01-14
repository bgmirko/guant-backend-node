import { all, fork } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import performersSaga from './performers/sagas';


export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(performersSaga)
    ]);
}