// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI7gPBxZmhWT_4FEWM9ymbix-COsD71IM",
  authDomain: "nikshop-1a5d6.firebaseapp.com",
  projectId: "nikshop-1a5d6",
  storageBucket: "nikshop-1a5d6.appspot.com",
  messagingSenderId: "980879587673",
  appId: "1:980879587673:web:a971b227137205ac79f448",
  measurementId: "G-0P5HNSM319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
