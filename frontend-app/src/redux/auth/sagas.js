import { takeEvery, call, put } from 'redux-saga/effects';
import * as ActionTypes from './actions';
import Api from '../../api/calls';

function* getUser(action){
  try{
      const graphqlQuery = {
          query: `{getUser(email: "${action.email}", password: "${action.password}"){_id, name, email, userName}}`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.getUserSuccess(result.data));
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
      yield put(ActionTypes.getUserError(error));
  }
}

function* addNewUser(action){
  try{
      const graphqlQuery = {
        query: `
          mutation {
            createUser(
              email: "${action.email}", 
              password: "${action.password}",
              name: "${action.name}", 
              userName: "${action.userName}",
              )
          {_id, name, email, userName}
        }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.newUserSuccess(result.data));
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
      yield put(ActionTypes.newUserError(error));
  }
}


export default function* authSaga() {
   yield takeEvery(ActionTypes.GET_USER, getUser);
   yield takeEvery(ActionTypes.ADD_NEW_USER, addNewUser);
}