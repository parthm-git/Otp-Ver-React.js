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
  apiKey: "can put your id here",
  authDomain: "mobile-ver-otp.firebaseapp.com",
  projectId: "mobile-ver-otp",
 

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
