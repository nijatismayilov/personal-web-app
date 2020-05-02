import { SideBarActionTypes } from './sidebar.types';

const INITIAL_STATE = {
  isSideBarActive: true
};

const sideBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SideBarActionTypes.SET_SIDE_BAR_IS_ACTIVE:
      return {
        ...state,
        isSideBarActive: action.payload
      }
    default:
      return state
  }
}

export default sideBarReducer;