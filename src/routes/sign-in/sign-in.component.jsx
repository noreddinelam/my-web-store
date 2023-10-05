import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import {useEffect} from "react";
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {

    /* USE REDIRECT METHOD */
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     if (!!response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn

