// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDiM4mCsbMgS8nAMIqbD_VRXfbyjsJwIwc',
  authDomain: 'react-firebase-crud-cf9ae.firebaseapp.com',
  projectId: 'react-firebase-crud-cf9ae',
  storageBucket: 'react-firebase-crud-cf9ae.appspot.com',
  messagingSenderId: '931554263810',
  appId: '1:931554263810:web:759cbb49b65438a6c3f81b',
  measurementId: 'G-8HSKVLGPBZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
