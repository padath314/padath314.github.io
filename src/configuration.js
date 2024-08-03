// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiM1PiJN3fUmqTA-kv7ULogwRUnbuRSX0",
  authDomain: "personal-portfolio-309e7.firebaseapp.com",
  databaseURL: "https://personal-portfolio-309e7-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-309e7",
  storageBucket: "personal-portfolio-309e7.appspot.com",
  messagingSenderId: "892129158054",
  appId: "1:892129158054:web:7392b03288d85a472be567"
};

// Initialize Firebase
const cong = initializeApp(firebaseConfig);
export default cong;