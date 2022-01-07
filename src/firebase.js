// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "FIREBASE_KEY",
  authDomain: "clothesshop-deb65.firebaseapp.com",
  projectId: "clothesshop-deb65",
  storageBucket: "clothesshop-deb65.appspot.com",
  messagingSenderId: "964394094362",
  appId: "1:964394094362:web:c9c500924525a891c0e6a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
