import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBB20__kNTngLfqdfqzIiV5-KQu0TWHyVs',
  authDomain: 'reading-list-fb-w9.firebaseapp.com',
  projectId: 'reading-list-fb-w9',
  storageBucket: 'reading-list-fb-w9.appspot.com',
  messagingSenderId: '175376024946',
  appId: '1:175376024946:web:5a93b22bed05f6028089eb',
};

// init firestore app
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
