import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmmosSSpc3NvQuZkQ8dKZb0R7tJG8Kls0",
  authDomain: "netflixgpt-101ac.firebaseapp.com",
  projectId: "netflixgpt-101ac",
  storageBucket: "netflixgpt-101ac.firebasestorage.app",
  messagingSenderId: "1090747727873",
  appId: "1:1090747727873:web:8f630b004649ac00088000",
  measurementId: "G-PTWHSGM4ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();