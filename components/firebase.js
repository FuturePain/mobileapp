import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0M4xXXyBzmhEc-iYZ-7L36JvQzpUzJ2Y",
  authDomain: "futurepain-c50a2.firebaseapp.com",
  projectId: "futurepain-c50a2",
  storageBucket: "futurepain-c50a2.firebasestorage.app",
  messagingSenderId: "1031351496945",
  appId: "1:1031351496945:web:b1091092ee7cd4db97f950",
  measurementId: "G-BV57RDH4SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};