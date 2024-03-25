
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3E01RvvSwUESS8mUopD3ExzVXZz-RxTs",
  authDomain: "proyecto-final-aea7e.firebaseapp.com",
  projectId: "proyecto-final-aea7e",
  storageBucket: "proyecto-final-aea7e.appspot.com",
  messagingSenderId: "1093477362344",
  appId: "1:1093477362344:web:ca67b3dd4e5a4e6c7e309d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)