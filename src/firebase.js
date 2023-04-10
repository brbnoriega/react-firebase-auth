// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvS9RFcoSIFbDRJO6r59P7-e7PDClxhHk",
  authDomain: "react-auth-79ab3.firebaseapp.com",
  projectId: "react-auth-79ab3",
  storageBucket: "react-auth-79ab3.appspot.com",
  messagingSenderId: "167256191902",
  appId: "1:167256191902:web:e6909196988d555bfb1c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);