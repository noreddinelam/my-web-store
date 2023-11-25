import {takeLatest, call, put, all} from "redux-saga/effects";
import {USER_ACTIONS_TYPES} from "./user.types";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    getCurrentUser,
    signInUserWithEmailAndPassword,
    signInWithGooglePopup, signOutUser
} from "../../utils/firebase/firebase.utils";
import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess
} from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalData);
        yield put (signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (e) {
        yield put (signInFailure(e));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (e) {
        yield put (signInFailure(e));
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (e) {
        yield put (signInFailure(e));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield call(signInUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (e) {
        yield put (signInFailure(e));
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield call(createAuthUserWithEmailAndPassword, email, password);
        yield put (signUpSuccess({user, additionalData: {displayName}}));
    } catch (e) {
        yield put (signUpFailure(e));
    }
}

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put (signOutSuccess());
    } catch (e) {
        yield put (signOutFailure(e));
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield call(getSnapshotFromUserAuth, user, additionalData);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignOutStart)]);
}
