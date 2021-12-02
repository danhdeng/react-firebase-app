// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_ApiKey,
  // authDomain: process.env.REACT_APP_AuthDomain,
  // projectId: process.env.REACT_APP_ProjectId,
  // storageBucket: process.env.REACT_APP_StorageBucket,
  // messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  // appId: process.env.EACT_APP_AppId,
  // measurementId: process.env.REACT_APP_easurementId,
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
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
