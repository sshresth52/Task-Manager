// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager4452.firebaseapp.com",
  projectId: "taskmanager4452",
  storageBucket: "taskmanager4452.appspot.com",
  messagingSenderId: "249218599060",
  appId: "1:249218599060:web:e7af03c5a1c6eff7becc81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
