// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAccOKE9mBPC0sED5_76xvJMvO5KL4SHCc",
    authDomain: "ema-john-simple-725f9.firebaseapp.com",
    projectId: "ema-john-simple-725f9",
    storageBucket: "ema-john-simple-725f9.appspot.com",
    messagingSenderId: "657038230252",
    appId: "1:657038230252:web:434fe4d8fd4cd8416cdbc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;