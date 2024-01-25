import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyByH2hVJIwmfT0RU2Ufwsg9z8EuSbmmLiY",
  authDomain: "context-crud-2023.firebaseapp.com",
  projectId: "context-crud-2023",
  storageBucket: "context-crud-2023.appspot.com",
  messagingSenderId: "298269773837",
  appId: "1:298269773837:web:0093d1005d3da62d680544"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app); 

export {auth, db};
