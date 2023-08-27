import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGXLv6I_VpXUQcyYp_KJxv_QFJkbX8RGI",
    authDomain: "my-web-store-57cfb.firebaseapp.com",
    projectId: "my-web-store-57cfb",
    storageBucket: "my-web-store-57cfb.appspot.com",
    messagingSenderId: "1031675683350",
    appId: "1:1031675683350:web:22acd3e5ff7dcd74abcb37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const existingDoc = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(existingDoc)
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(existingDoc, {
                displayName, email, createdAt
            })
        } catch (e) {
            console.log('error creating the user', e.message)
        }
    }
    return existingDoc
}
