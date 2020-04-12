import { AboutActionTypes } from './about.types';

export const fetchAboutsStart = () => ({
    type: AboutActionTypes.FETCH_ABOUTS_START
});

export const fetchAboutsSuccess = (abouts) => ({
    type: AboutActionTypes.FETCH_ABOUTS_SUCCESS,
    payload: abouts
});

export const fetAboutsFailure = (errorMessage) => ({
    type: AboutActionTypes.FETCH_ABOUTS_FAILURE,
    payload: errorMessage
});