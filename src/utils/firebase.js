// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCWKUJWRCFHphFemKUr5O4yThKGHyAwWTw',
	authDomain: 'netflix-gpt-aa3a7.firebaseapp.com',
	projectId: 'netflix-gpt-aa3a7',
	storageBucket: 'netflix-gpt-aa3a7.appspot.com',
	messagingSenderId: '358064021248',
	appId: '1:358064021248:web:34927c3653e1eadb235de5',
	measurementId: 'G-NECK2C0PJ5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
