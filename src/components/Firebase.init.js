// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCxoIf0gJLxnoDFeEQGI6ezMshAE11AX5Y",
//   authDomain: "assignment-09-cc8f4.firebaseapp.com",
//   projectId: "assignment-09-cc8f4",
//   storageBucket: "assignment-09-cc8f4.firebasestorage.app",
//   messagingSenderId: "182134850975",
//   appId: "1:182134850975:web:d01c67eeef67252a7069aa",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// debug: confirm env vars


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
