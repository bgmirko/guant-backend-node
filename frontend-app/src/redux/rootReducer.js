import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import performersReducer from './performers/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    performers: performersReducer
});

export default rootReducer;