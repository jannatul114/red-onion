// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu974MtGF0ayAlYb5LXXwWLHf4IzfD2hM",
    authDomain: "red-onion-ec036.firebaseapp.com",
    projectId: "red-onion-ec036",
    storageBucket: "red-onion-ec036.appspot.com",
    messagingSenderId: "453379221819",
    appId: "1:453379221819:web:3854605101f14c31306f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;