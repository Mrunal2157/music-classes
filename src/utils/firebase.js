import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const {
  VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDERID,
  VITE_FIREBASE_APPID,
} = import.meta.env;
import {
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  query,
  limit,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: VITE_FIREBASE_APIKEY,
  authDomain: VITE_FIREBASE_AUTHDOMAIN,
  projectId: VITE_FIREBASE_PROJECTID,
  storageBucket: VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
  appId: VITE_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { collection, getDocs, setDoc, doc, addDoc, limit, query, orderBy };

export default db;
