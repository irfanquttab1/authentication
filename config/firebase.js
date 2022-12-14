// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWnDB3hht8XF3oDxpWuER6DjsAPhAOI1U",
  authDomain: "e-rozgar-269ab.firebaseapp.com",
  projectId: "e-rozgar-269ab",
  storageBucket: "e-rozgar-269ab.appspot.com",
  messagingSenderId: "152562651120",
  appId: "1:152562651120:web:76c6378110820bd4fc5735",
  measurementId: "G-SZXP09L7DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app