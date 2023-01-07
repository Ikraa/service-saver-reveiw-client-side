// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Fya1AXvINQyTU5CsQMbv04MsXouQvFE",
  authDomain: "service-saver-dcd02.firebaseapp.com",
  projectId: "service-saver-dcd02",
  storageBucket: "service-saver-dcd02.appspot.com",
  messagingSenderId: "231629402094",
  appId: "1:231629402094:web:dcaaf27fdde7ef8984a8ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth