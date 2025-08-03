// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_y2IzaP339bJJzIjaKl6N4AkqqW-lbWg",
  authDomain: "bible-app-37aa0.firebaseapp.com",
  projectId: "bible-app-37aa0",
  storageBucket: "bible-app-37aa0.appspot.com",
  messagingSenderId: "418003197695",
  appId: "1:418003197695:web:d470cdc1c0f80623aa76ca",
  measurementId: "G-3SZGRM2BQN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
