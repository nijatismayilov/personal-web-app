import { InterviewsActionTypes } from './interviews.types';

export const fetchInterviewsStart = () => ({
    type: InterviewsActionTypes.FETCH_INTERVIEWS_START
});

export const fetchInterviewsSuccess = (interviews) => ({
    type: InterviewsActionTypes.FETCH_INTERVIEWS_SUCCESS,
    payload: interviews
});

export const fetchInterviewsFailure = (errorMessage) => ({
    type: InterviewsActionTypes.FETCH_INTERVIEWS_FAILURE,
    payload: errorMessage
});