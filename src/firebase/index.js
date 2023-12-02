// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeC3OX0ZNkWO1-wZgprbP-j73XnOp1QdQ",
  authDomain: "blaze-plan-account.firebaseapp.com",
  databaseURL:
    "https://blaze-plan-account-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blaze-plan-account",
  storageBucket: "blaze-plan-account.appspot.com",
  messagingSenderId: "258048658228",
  appId: "1:258048658228:web:3cfd6b09f765dcdb657361",
  measurementId: "G-2KDSVH3PR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
