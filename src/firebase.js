// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzfBdYrq-5lBP3fvf1G3Lh4rdGVCEnf6U",
  authDomain: "react-disney-plus-app-b3aa3.firebaseapp.com",
  projectId: "react-disney-plus-app-b3aa3",
  storageBucket: "react-disney-plus-app-b3aa3.appspot.com",
  messagingSenderId: "514997292893",
  appId: "1:514997292893:web:3ff074b658e706694fa2b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;