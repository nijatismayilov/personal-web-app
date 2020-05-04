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

export const selectInterviewItemsDescending = createSelector(
  [selectInterviewItems],
  interviews => {
    if (!interviews) return interviews;
    else {
      return (interviews.sort((interview1, interview2) => {
        return Date.parse(interview1.date) <= Date.parse(interview2.date) ? 1 : -1;
      }));
    }
  }
);

export const selectInterviewsIsFetching = createSelector(
  [selectInterviews],
  interviews => interviews.isFetching
);