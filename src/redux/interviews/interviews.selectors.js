import { createSelector } from 'reselect';

const selectInterviews = state => state.interviews;

export const selectSitesInterviews = createSelector(
    [selectInterviews],
    interviews => interviews.sites
);

export const selectNewspapersInterviews = createSelector(
    [selectInterviews],
    interviews => interviews.newspapers
);