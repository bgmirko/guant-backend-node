import * as ActionTypes from './actions';

const initialState = {
    performers: [],
    dataLoading: false
 }

const performersReducer = (state = initialState, action) => { 
    switch (action.type) { 
        case ActionTypes.GET_PERFORMERS:
            return {
                ...state,
                dataLoading: true
            };  
        case ActionTypes.GET_PERFORMERS_SUCCESS:
            const performers = action.payload.data.getPerformers.performers;
            return {
                ...state,
                performers: performers,
                dataLoading: false
            };   
        case ActionTypes.GET_PERFORMERS_ERROR:
            return {
                ...state,
                performers: [],
                dataLoading: false,
                errorMessage: action.payload.message
            };
        default:
            return { ...state };
    }

}

export default performersReducer;