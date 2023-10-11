import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './authentication.styles.scss'

const Authentication = () => {

    /* USE REDIRECT METHOD */
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth)
    //     if (!!response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    // }, [])

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication

