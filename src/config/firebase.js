// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.VITE_APIKEY,
    authDomain: import.meta.VITE_AUTH_DOMAIN,
    projectId: import.meta.VITE_PROJECT_ID,
    storageBucket: import.meta.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.VITE_MESSAGING_ID,
    appId: import.meta.VITE_APP_ID,
    measurementId: import.meta.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(app);

export { auth };