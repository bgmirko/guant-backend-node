//Action Types
export const GET_PERFORMERS = 'performer/GET_PERFORMERS';
export const GET_PERFORMERS_SUCCESS = 'performer/GET_PERFORMERS_SUCCESS';
export const GET_PERFORMERS_ERROR = 'performer/GET_PERFORMERS_ERROR';

export const ADD_NEW_PERFORMER = 'performer/ADD_NEW_PERFORMER';
export const NEW_PERFORMER_SUCCESS = 'performer/NEW_PERFORMER_SUCCESS';
export const NEW_PERFORMER_ERROR = 'performer/NEW_PERFORMER_ERROR';

export const DELETE_PERFORMER = 'performer/DELETE_PERFORMER';

export const EDIT_PERFORMER = 'performer/EDIT_PERFORMER';



//Action creators
export const getPerformers = () => ({
    type: GET_PERFORMERS
});

export const getPerformersSuccess = (data) => ({
    type: GET_PERFORMERS_SUCCESS,
    payload: data
});

export const getPerformersError = (error) => ({
    type: GET_PERFORMERS_ERROR,
    payload: error
});


export const addNewPerformer = (name, age, category) => ({
    type: ADD_NEW_PERFORMER,
    name: name,
    age: age,
    category: category
});

export const newPerformerSuccess = (data) => ({
    type: NEW_PERFORMER_SUCCESS,
    payload: data
});

export const newPerformerError = (error) => ({
    type: NEW_PERFORMER_ERROR,
    payload: error
});

export const deletePerformer = (_id) => ({
    type: DELETE_PERFORMER,
    _id: _id
});

export const editPerformer = (_id, name, age, category) => ({
    type: EDIT_PERFORMER,
    _id: _id,
    name: name,
    age: age,
    category: category
});
