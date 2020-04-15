import { TelevisionActionTypes } from './television.types';

export const fetchTelevisionItemsStart = () => ({
    type: TelevisionActionTypes.FETCH_TELEVISION_ITEMS_START
})

export const fetchTelevisionItemsSuccess = (televisionItems) => ({
    type: TelevisionActionTypes.FETCH_TELEVISION_ITEMS_SUCCESS,
    payload: televisionItems
})

export const fetchTelevisionItemsFailure = (errorMessage) => ({
    type: TelevisionActionTypes.FETCH_TELEVISION_ITEMS_FAILURE,
    payload: errorMessage
})