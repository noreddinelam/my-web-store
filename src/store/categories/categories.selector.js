import {createSelector} from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
    return categories.reduce((accumulator, category) => {
        const {title, items} = category;
        accumulator[title.toLowerCase()] = items;
        return accumulator;
    }, {});
});

export const selectIsCategoriesLoading = createSelector([selectCategoriesReducer], (categoriesSlice) => categoriesSlice.isLoading);

