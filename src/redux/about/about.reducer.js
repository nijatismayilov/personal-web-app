import { AboutActionTypes } from './about.types';

const INITIAL_STATE = {
  abouts: [],
  isFetching: false,
  errorMessage: undefined
}

const aboutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AboutActionTypes.FETCH_ABOUTS_START:
            return {
                ...state,
                isFetching: true
            }
        case AboutActionTypes.FETCH_ABOUTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                abouts: action.payload
            }
        case AboutActionTypes.FETCH_ABOUTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default aboutReducer;