import { createSelector } from 'reselect';

const selectScientific = state => state.scientific;

export const selectScientificItems = createSelector(
  [selectScientific],
  scientific => scientific.scientificItems
);

export const selectIsScientificEmpty = createSelector(
  [selectScientificItems],
  scientificItems => scientificItems.length === 0
);

export const selectScientificItemsDescending = createSelector(
  [selectScientificItems],
  scientificItems => {
    if (!scientificItems) return scientificItems;
    else {
      return (scientificItems.sort((item1, item2) => {
        return Date.parse(item1.date) <= Date.parse(item2.date) ? 1 : -1;
      }));
    }
  }
);

export const selectIsScientificFethcing = createSelector(
  [selectScientific],
  scientific => scientific.isFetching
);