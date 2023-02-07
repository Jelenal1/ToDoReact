// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBHphzf5JDL0RLhy6PnLaqRQkI0er8WuR0",
  authDomain: "todoapp-react-23.firebaseapp.com",
  projectId: "todoapp-react-23",
  storageBucket: "todoapp-react-23.appspot.com",
  messagingSenderId: "219344509912",
  appId: "1:219344509912:web:0d9ec2d6b430e35d1eb0ad"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);