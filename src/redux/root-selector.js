import { createSelector } from 'reselect';

const selectState = state => state;

export const selectPartOfState = piece => createSelector(
  [selectState],
  state => state[piece]
)

export const selectKeysOfPartOfState = piece => createSelector(
  [selectPartOfState(piece)],
  statePiece => Object.keys(statePiece)
)