
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4XdPbIVAqTWyjqCokJziRB2-ngULl1nY",
  authDomain: "react-portifolio-cb113.firebaseapp.com",
  projectId: "react-portifolio-cb113",
  storageBucket: "react-portifolio-cb113.appspot.com",
  messagingSenderId: "783667859199",
  appId: "1:783667859199:web:4a92e0b802d8b56e28c6ca",
  measurementId: ''
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app, {
  experimentalForceLongPolling: true,
});;
export const storage = getStorage(app);
// const analytics = getAnalytics(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);