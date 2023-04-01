import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration


const firebaseConfig = {
    apiKey: "AIzaSyBbwzgQOtHPkV4za9nKPqJDn9x2IwxOpK8",
    authDomain: "movieapp-1dd4b.firebaseapp.com",
    projectId: "movieapp-1dd4b",
    storageBucket: "movieapp-1dd4b.appspot.com",
    messagingSenderId: "112127748100",
    appId: "1:112127748100:web:5bb236a6f4e7222cb6ad51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
