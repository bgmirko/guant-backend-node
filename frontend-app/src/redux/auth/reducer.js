import * as ActionTypes from './actions';

const initialState = {
    user: {
        _id: null,
        userName: "",
        name: "",
        email: ""
    },
    dataLoading: false,
    errorMessage: null
 }

const authReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case ActionTypes.GET_USER:
            return {
                ...state,
                dataLoading: true,
                errorMessage: ""
            };  
        case ActionTypes.GET_USER_SUCCESS:
            const user = action.payload.data.getUser;
            return {
                ...state,
                user: {
                    _id: user._id,
                    userName: user.userName,
                    name: user.name,
                    email: user.email
                },
                dataLoading: false,
                errorMessage: ""
            };   
        case ActionTypes.GET_USER_ERROR:
            return {
                ...state,
                user: {
                    _id: null,
                    userName: "",
                    name: "",
                    email: ""
                },
                dataLoading: false,
                errorMessage: action.payload.message
            };
        case ActionTypes.LOGOUT:
            return {
                ...state,
                user: {
                    _id: null,
                    userName: "",
                    name: "",
                    email: ""
                },
                errorMessage: ""
            };   
        case ActionTypes.ADD_NEW_USER:
            return {
                ...state,
                dataLoading: true
            };   
        case ActionTypes.NEW_USER_SUCCESS:
            const newUser = action.payload.data.createUser;
            return {
                ...state,
                user: {
                    _id: newUser._id,
                    userName: newUser.userName,
                    name: newUser.name,
                    email: newUser.email
                },
                dataLoading: false
            };   
        case ActionTypes.NEW_USER_ERROR:
            return {
                ...state,
                user: {
                    _id: null,
                    userName: "",
                    name: "",
                    email: ""
                },
                dataLoading: false,
                errorMessage: action.payload.message
            };
        default:
            return { ...state };
    }

}

export default authReducer;