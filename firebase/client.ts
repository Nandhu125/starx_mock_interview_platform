// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByy6C_sD6I-IQoLF78oBuW3CRkTyeULrs",
  authDomain: "prepquick-9bdd4.firebaseapp.com",
  projectId: "prepquick-9bdd4",
  storageBucket: "prepquick-9bdd4.firebasestorage.app",
  messagingSenderId: "232369915442",
  appId: "1:232369915442:web:96d36ecc130f1cc3f51e2b",
  measurementId: "G-YM51DJ1Z4Y",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
