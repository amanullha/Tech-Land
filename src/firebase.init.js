
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoJgedxO0zz-fVs6Aws3BTBrZ-76bbmTQ",
    authDomain: "tech-land-761e3.firebaseapp.com",
    projectId: "tech-land-761e3",
    storageBucket: "tech-land-761e3.appspot.com",
    messagingSenderId: "629717709689",
    appId: "1:629717709689:web:e64e11574e9da12fe935a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;