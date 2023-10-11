import {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import {FormInput} from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("passwords are not the same")
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (error) {
            if (error?.code === 'auth/email-already-in-use') {
                alert("Email alread in use !!")
            } else {
                console.error('User creation failed !!')
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h1>Don't have an account</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} required type='text' name="displayName" value={displayName} onChange={handleChange}/>
                <FormInput label={'Email'} required type='email' name="email" value={email} onChange={handleChange}/>
                <FormInput label={'Password'} required type='password' name="password" value={password} onChange={handleChange}/>
                <FormInput label={'Confirm Password'} required type='password' name="confirmPassword" value={confirmPassword} onChange={handleChange}/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;
