import { createSelector } from 'reselect';

const selectSideBar = state => state.sideBar;

export const selectIsSideBarActive = createSelector(
  [selectSideBar],
  sideBar => sideBar.isSideBarActive
)