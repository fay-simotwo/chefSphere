// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9e9nSOC9GCHIftM_-ROKwkBKZfdflMKc",
  authDomain: "chefsphere-e698b.firebaseapp.com",
  projectId: "chefsphere-e698b",
  storageBucket: "chefsphere-e698b.appspot.com",
  messagingSenderId: "235126614060",
  appId: "1:235126614060:web:9950942d430f390e240989",
  measurementId: "G-DE71JGNYB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };