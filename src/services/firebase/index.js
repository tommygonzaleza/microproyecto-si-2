// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdV7f9uRwic6chtr7yvJyh0DIKcz3SYto",
  authDomain: "microproyecto-si-2.firebaseapp.com",
  projectId: "microproyecto-si-2",
  storageBucket: "microproyecto-si-2.appspot.com",
  messagingSenderId: "969671975337",
  appId: "1:969671975337:web:4c36543dfc1dd3ea9424b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);