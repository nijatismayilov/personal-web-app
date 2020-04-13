import { InterviewsActionTypes } from './interviews.types';

const INITIAL_STATE = {
    interviews: null,
    isFetching: false,
    errorMessage: undefined
}

const interviewsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case InterviewsActionTypes.FETCH_INTERVIEWS_START:
            return {
                ...state,
                isFetching: true
            }
        case InterviewsActionTypes.FETCH_INTERVIEWS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                interviews: action.payload
            }
        case InterviewsActionTypes.FETCH_INTERVIEWS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default interviewsReducer;