import { createSelector } from 'reselect';

const selectAbout = state => state.about;

export const selectAboutItems = createSelector(
    [selectAbout],
    about => about.abouts
);