import { useState, useEffect} from "react";
//firebase utils
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import "firebase/auth"

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIRBASE_MEASUREMENT_ID
});

const auth = getAuth();

export const useAuth = () => {
    const [ currentUser, serCurrentUser ] = useState();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user => serCurrentUser(user));
        return unsub;
    },[])

    return currentUser;
}

export const signUp = (email, passwd) => {
    return createUserWithEmailAndPassword(auth, email, passwd);
}

export const logIn = (email, passwd) => {
    return signInWithEmailAndPassword(auth,email, passwd);
}

export const logOut = () => {
    return signOut(auth);
}

export const db = getFirestore(app);
