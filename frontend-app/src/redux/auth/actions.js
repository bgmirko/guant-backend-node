//Action Types
export const GET_USER = 'auth/GET_USER';
export const GET_USER_SUCCESS = 'auth/GET_USER_SUCCESS';
export const GET_USER_ERROR = 'auth/GET_USER_ERROR';

export const LOGOUT = "auth/LOGOUT";

export const ADD_NEW_USER = 'auth/ADD_NEW_USER';
export const NEW_USER_SUCCESS = 'auth/NEW_USER_SUCCESS';
export const NEW_USER_ERROR = 'auth/NEW_USER_ERROR';


//Action creators
export const getUser = (email, password) => ({
    type: GET_USER,
    email: email,
    password: password
});

export const getUserSuccess = (data) => ({
    type: GET_USER_SUCCESS,
    payload: data
});

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    payload: error
});

export const logout = () => ({
    type: LOGOUT
});

export const addNewUser = (email, password, name, userName) => ({
    type: ADD_NEW_USER,
    email: email,
    password: password,
    name: name,
    userName: userName
});

export const newUserSuccess = (data) => ({
    type: NEW_USER_SUCCESS,
    payload: data
});

export const newUserError = (error) => ({
    type: NEW_USER_ERROR,
    payload: error
});


