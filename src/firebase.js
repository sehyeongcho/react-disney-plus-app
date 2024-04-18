/**
 * Firebase의 다양한 기능(auth, database, storage 등) 중 auth 기능만 사용합니다.
 * API 키가 일반적으로 사용되는 방식과 달리 Firebase 서비스용 API 키는 백엔드 리소스에 대한 액세스를 제어하는 데 사용되지 않습니다. (https://firebase.google.com/docs/projects/api-keys?hl=ko#api-keys-for-firebase-are-different)
 */

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