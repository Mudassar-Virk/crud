// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQq2uWe_F3qY9M-sVdaeVLnqM_PXm3LtA",
  authDomain: "pkreal-8822f.firebaseapp.com",
  projectId: "pkreal-8822f",
  storageBucket: "pkreal-8822f.firebasestorage.app",
  messagingSenderId: "279478465111",
  appId: "1:279478465111:web:c9bcb4b042db7963c9a912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}