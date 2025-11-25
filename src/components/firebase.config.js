// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdVpFLdt_rWeiyUovr07z4BmrnHCU_7h8",
  authDomain: "warmpaws-f995b.firebaseapp.com",
  projectId: "warmpaws-f995b",
  storageBucket: "warmpaws-f995b.appspot.com",
  messagingSenderId: "75736419584",
  appId: "1:75736419584:web:643c4939c08a64e9a9b7e5",
  measurementId: "G-S3CX24W5PR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export so other files can use it
export { app, auth, db };


