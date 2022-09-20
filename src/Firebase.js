import { initializeApp } from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHZFwW6F8cBcOCwnfN6Wo0ThyzMOanVUI",
  authDomain: "project099-99999.firebaseapp.com",
  projectId: "project099-99999",
  storageBucket: "project099-99999.appspot.com",
  messagingSenderId: "14524884258",
  appId: "1:14524884258:web:b87c2c326a47247ad8717b",
  measurementId: "G-43HXYJ2RGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("firebase connected successfully");


export default app;