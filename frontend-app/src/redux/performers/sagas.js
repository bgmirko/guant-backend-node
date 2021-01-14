import { takeEvery, call, put } from 'redux-saga/effects';
import * as ActionTypes from './actions';
import Api from '../../api/calls';

function* getPerformers(action){
  try{
      const graphqlQuery = {
          query: `{
            getPerformers{
              performers{
                _id,
                name,
                age,
                category
              }
            }
          }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.getPerformersSuccess(result.data));
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
      yield put(ActionTypes.getPerformersError(error));
  }
}

function* addNewPerformer(action){
  try{
      const graphqlQuery = {
        query: `
          mutation {
            createPerformer(
              name: "${action.name}", 
              age: "${action.age}",
              category: "${action.category}"
              )
          {_id, name, age, category}
        }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.newPerformerSuccess(result.data));
        yield put(ActionTypes.getPerformers());
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
      yield put(ActionTypes.newPerformerError(error));
  }
}

function* deletePerformer(action){
  try{
      const graphqlQuery = {
        query: `
          mutation {
            deletePerformer(
              _id: "${action._id}", 
              )
        }`
      };
      const result = yield call(Api.makePostRequest, graphqlQuery);
      if(!result.data.hasOwnProperty('errors')){
        yield put(ActionTypes.getPerformers());
      }else{
        throw new Error(result.data.errors[0].message);
      }
  }catch(error){
     console.log(error);
  }
}

function* editPerformer(action){
  try{
      const graphqlQuery = {
        query: `
          mutation {
            editPerformer(
              _id: "${action._id}", 
              name: "${action.name}", 
              age: "${action.age}", 
              category: "${action.category}", 
              )
        }`
      };
      yield call(Api.makePostRequest, graphqlQuery);
      yield put(ActionTypes.getPerformers());
  }catch(error){
      console.log(error)
  }
}


export default function* authSaga() {
   yield takeEvery(ActionTypes.ADD_NEW_PERFORMER, addNewPerformer);
   yield takeEvery(ActionTypes.GET_PERFORMERS, getPerformers);
   yield takeEvery(ActionTypes.DELETE_PERFORMER, deletePerformer);
   yield takeEvery(ActionTypes.EDIT_PERFORMER, editPerformer);
}