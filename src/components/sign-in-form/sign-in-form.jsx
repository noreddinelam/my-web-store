import {useState} from "react";
import {
    signInUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import {FormInput} from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const user = await signInUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            if (error?.code === 'auth/wrong-password') {
                alert("Incorrect password!!")
            } else {
                console.error('User signing failed !!')
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h1>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} required type='email' name="email" value={email} onChange={handleChange}/>
                <FormInput label={'Password'} required type='password' name="password" value={password}
                           onChange={handleChange}/>

                <div className={'buttons-container'}>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;
