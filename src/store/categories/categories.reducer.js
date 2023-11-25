import {CATEGORIES_ACTIONS_TYPES} from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START:
            return {...state, isLoading: true}
        case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED:
            return {...state, isLoading: false, error: payload}
        case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS:
            return {...state, isLoading: false, categories: payload}
        default:
            return state;
    }
}
