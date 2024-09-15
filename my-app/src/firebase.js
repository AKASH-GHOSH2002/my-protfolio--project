
import { initializeApp } from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyWap4m_HyzqHtBkZQu6xhCfe1vbL-uf4",
  authDomain: "akash--protfolio.firebaseapp.com",
  projectId: "akash--protfolio",
  storageBucket: "akash--protfolio.appspot.com",
  messagingSenderId: "343731785521",
  appId: "1:343731785521:web:5d382e5516311132b42a10"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db =getFirestore();