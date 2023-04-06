import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA79dSEinWpWC6G8RyKdWWptYHQMQRTG-0",
  authDomain: "aurora-382822.firebaseapp.com",
  projectId: "aurora-382822",
  storageBucket: "aurora-382822.appspot.com",
  messagingSenderId: "1080040983595",
  appId: "1:1080040983595:web:5bd2cc5055b76053ed2e6e",
  measurementId: "G-VN2Y38GWYK"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
