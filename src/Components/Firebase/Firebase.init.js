// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDigQpvBEGJ6T5PDqp6DkPY0vaxSL9nbbM",
    authDomain: "cycle-inventory.firebaseapp.com",
    projectId: "cycle-inventory",
    storageBucket: "cycle-inventory.appspot.com",
    messagingSenderId: "617310823798",
    appId: "1:617310823798:web:39da14763496cfa579c657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;