import { createSelector } from 'reselect';

const selectInterviews = state => state.interviews;

export const selectInterviewItems = createSelector(
    [selectInterviews],
    interviews => interviews.interviews
)