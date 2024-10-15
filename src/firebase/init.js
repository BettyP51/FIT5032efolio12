// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5PUsGpFVbuenBN3cj6RF5x9QluyNweCQ",
  authDomain: "week7-ruiying.firebaseapp.com",
  projectId: "week7-ruiying",
  storageBucket: "week7-ruiying.appspot.com",
  messagingSenderId: "412873499521",
  appId: "1:412873499521:web:049a31bb30c280bc78be80"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db