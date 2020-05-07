import { ScientificActionTypes } from './scientific.types';

const INITIAL_STATE = {
  scientificItems: [],
  isFetching: false,
  errorMessage: undefined
}

const scientificReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_START:
      return {
        ...state,
        isFetching: true
      };
    case ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_SUCCESS:
      return {
        ...state,
        scientificItems: action.payload,
        isFetching: false
      };
    case ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
}

export default scientificReducer;