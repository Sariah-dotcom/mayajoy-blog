// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// The web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mayajoy-blog.firebaseapp.com",
  projectId: "mayajoy-blog",
  storageBucket: "mayajoy-blog.appspot.com",
  messagingSenderId: "591140393131",
  appId: "1:591140393131:web:4db1b1a76da1a4e03827ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 