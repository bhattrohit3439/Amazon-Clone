// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA1Z1cDY0RurAx6OV5UkY-FQWQ-59M-i2w',
	authDomain: 'clone-6aacd.firebaseapp.com',
	projectId: 'clone-6aacd',
	storageBucket: 'clone-6aacd.appspot.com',
	messagingSenderId: '391326536375',
	appId: '1:391326536375:web:cda2c572411db77ed9b332',
	measurementId: 'G-HGJPEWLK9C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
