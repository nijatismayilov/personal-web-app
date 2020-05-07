import { ScientificActionTypes } from './scientific.types';

export const fetchScientificItemsStart = () => ({
  type: ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_START
});

export const fetchScientificItemsSuccess = (scientificItems) => ({
  type: ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_SUCCESS,
  payload: scientificItems
});

export const fetchScientificItemsFailure = (error) => ({
  type: ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_FAILURE,
  payload: error
});