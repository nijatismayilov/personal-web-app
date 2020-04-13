import { createSelector } from 'reselect';

const selectAbout = state => state.about;

export const selectAboutItems = createSelector(
    [selectAbout],
    about => about.abouts
);

export const selectAboutItemsDescending = createSelector(
    [selectAboutItems],
    abouts => {
        return (
            abouts
                ? abouts.sort((about1, about2) => +(about1.date) <= +(about2.date) ? 1 : -1)
                : null
        )
    }
)

export const selectAboutIsFetching = createSelector(
    [selectAbout],
    about => about.isFetching
)