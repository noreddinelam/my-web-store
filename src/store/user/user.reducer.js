import {USER_ACTIONS_TYPES} from "./user.types";

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch (type) {
        case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
            return {...state, currentUser: payload, isLoading: false, error: null}
        case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
            return {...state, currentUser: null, isLoading: false, error: null}
        case USER_ACTIONS_TYPES.SIGN_OUT_FAILED:
        case USER_ACTIONS_TYPES.SIGN_IN_FAILED:
        case USER_ACTIONS_TYPES.SIGN_UP_FAILED:
            return {...state, error: payload, isLoading: false}
        default:
            return state;
    }
}

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}
