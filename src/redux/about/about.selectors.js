import { createSelector } from 'reselect';

const selectAbout = state => state.about;

export const selectIsAboutsEmpty = createSelector(
  [selectAbout],
  about => about.abouts.length === 0 
);

export const selectAboutItems = createSelector(
  [selectAbout],
  about => about.abouts
);

export const selectAboutItemsDescending = createSelector(
  [selectAboutItems],
  abouts => {
    return (
      abouts
        ? abouts.sort((about1, about2) => Date.parse(about1.date) <= Date.parse(about2.date) ? 1 : -1)
        : null
    )
  }
)

export const selectAboutIsFetching = createSelector(
  [selectAbout],
  about => about.isFetching
)