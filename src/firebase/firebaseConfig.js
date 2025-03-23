import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
// Replace with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvuuBSOj4XHvpu-Rzt2QO8Fm3h3LmxX7s",
    authDomain: "fitness-buddy-login.firebaseapp.com",
    projectId: "fitness-buddy-login",
    storageBucket: "fitness-buddy-login.firebasestorage.app",
    messagingSenderId: "1022772023121",
    appId: "1:1022772023121:web:82fbb6a59e6817e3be4d70"
  };

const app = initializeApp(firebaseConfig);

// Export auth and db properly
const auth = getAuth(app);
const db = getFirestore(app);
  
export { auth, db };