import {createAction} from "../../utils/reducer/reducer.utils";
import {CATEGORIES_ACTIONS_TYPES} from "./categories.types";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const setCategories = (categories) => createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS, categories);

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED, error);
