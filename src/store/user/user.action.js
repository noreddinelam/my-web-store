import {createAction} from "../../utils/reducer/reducer.utils";
import {USER_ACTIONS_TYPES} from "./user.types";

export const setCurrentUser = (user) => createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signInSuccess = (user) => createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailure = (error) => createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {email, password, displayName});

export const signUpSuccess = ({user, additionalData}) => createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, {user, additionalData});

export const signUpFailure = (error) => createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(USER_ACTIONS_TYPES.SIGN_OUT_START);

export const signOutSuccess = () => createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailure = (error) => createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error);
