// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPyZpnLinJkDkyjfY2qiqBZ7M9-kdr24E",
  authDomain: "shopping-cart-b2765.firebaseapp.com",
  projectId: "shopping-cart-b2765",
  storageBucket: "shopping-cart-b2765.firebasestorage.app",
  messagingSenderId: "24285378152",
  appId: "1:24285378152:web:71f5794768ca9879d4addd",
  measurementId: "G-QWPVQJJG83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);