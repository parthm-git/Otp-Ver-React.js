// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5nDgyBNIMPriZTnBHDDk-Q6tWcPEQ95g",
  authDomain: "mobile-ver-otp.firebaseapp.com",
  projectId: "mobile-ver-otp",
  storageBucket: "mobile-ver-otp.appspot.com",
  messagingSenderId: "801961596438",
  appId: "1:801961596438:web:d9e784e0244a4d23e04737",
  measurementId: "G-FEXV3C2QY0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);