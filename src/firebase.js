import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"
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

export const db = getFirestore(app);
