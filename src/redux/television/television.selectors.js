import { createSelector } from 'reselect';

const selectTelevision = state => state.television;

export const selectTelevisionApperances = createSelector(
    [selectTelevision],
    television => television.tvApperances
);