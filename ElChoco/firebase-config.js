// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl9KKKS-iSlC34nYEDG4xbsgbW5tE_Xic",
  authDomain: "chocontano-b2ede.firebaseapp.com",
  projectId: "chocontano-b2ede",
  storageBucket: "chocontano-b2ede.firebasestorage.app",
  messagingSenderId: "680395330809",
  appId: "1:680395330809:web:cd0e73714b2a08880c3e28"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth y Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar Auth y Firestore
export { auth, db };