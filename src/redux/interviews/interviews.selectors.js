import { createSelector } from 'reselect';

const selectInterviews = state => state.interviews;

export const selectIsInterviewsEmpty = createSelector(
  [selectInterviews],
  interviews => interviews.interviews.length === 0
);

export const selectInterviewItems = createSelector(
  [selectInterviews],
  interviews => interviews.interviews
);

export const selectInterviewsIsFetching = createSelector(
  [selectInterviews],
  interviews => interviews.isFetching
);