import { createSelector } from 'reselect';

const selectTelevision = state => state.television;

export const selectTelevisionApperances = createSelector(
  [selectTelevision],
  television => television.television
);

export const selectIsTelevisionEmpty = createSelector(
  [selectTelevisionApperances],
  television => television.length === 0
);

export const selectIsFetching = createSelector(
  [selectTelevision],
  television => television.isFething
);