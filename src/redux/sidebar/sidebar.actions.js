import { SideBarActionTypes } from './sidebar.types';

export const setSideBarIsActive = (status) => ({
  type: SideBarActionTypes.SET_SIDE_BAR_IS_ACTIVE,
  payload: status
});