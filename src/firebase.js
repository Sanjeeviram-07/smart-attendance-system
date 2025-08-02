import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwbmX4r7IVHuaw1UIugtZwBhFjMWlxRDw",
  authDomain: "smart-attendance-system-80b1c.firebaseapp.com",
  projectId: "smart-attendance-system-80b1c",
  storageBucket: "smart-attendance-system-80b1c.firebasestorage.app",
  messagingSenderId: "197307856875",
  appId: "1:197307856875:web:1ab31409be73ebe45dcbae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };