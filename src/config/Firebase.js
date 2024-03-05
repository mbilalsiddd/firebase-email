// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwX3EyIGPY7eDApWiKmTXw3UCvf5Yvqh8",
  authDomain: "fir-auth-49c76.firebaseapp.com",
  projectId: "fir-auth-49c76",
  storageBucket: "fir-auth-49c76.appspot.com",
  messagingSenderId: "653191629987",
  appId: "1:653191629987:web:c4ceb316ac0f2c1f18c316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db,auth}