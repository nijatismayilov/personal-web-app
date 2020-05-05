import { TelevisionActionTypes } from './television.types';

const INITIAL_STATE = {
  television: [],
  isFething: false,
  errorMessage: undefined
}

const televisionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TelevisionActionTypes.FETCH_TELEVISION_ITEMS_START:
      return {
          ...state,
          isFething: true
      }
    case TelevisionActionTypes.FETCH_TELEVISION_ITEMS_SUCCESS:
      return {
          ...state,
          isFething: false,
          television: action.payload
      }
    case TelevisionActionTypes.FETCH_TELEVISION_ITEMS_FAILURE:
      return {
          ...state,
          isFething: false,
          errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default televisionReducer;