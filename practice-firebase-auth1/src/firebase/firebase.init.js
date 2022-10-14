// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHGZ8tMsbinTHTTdsFB9cT8cy2YxkgJGw",
  authDomain: "practice-firebase-auth1.firebaseapp.com",
  projectId: "practice-firebase-auth1",
  storageBucket: "practice-firebase-auth1.appspot.com",
  messagingSenderId: "430614918998",
  appId: "1:430614918998:web:29f98b6d88d5a59fac48f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;