import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIysuFnDXqa7yzGarKgRoBrQVjEP41X8Y',
  authDomain: 'batacook-a9a39.firebaseapp.com',
  projectId: 'batacook-a9a39',
  storageBucket: 'batacook-a9a39.appspot.com',
  messagingSenderId: '139842308418',
  appId: '1:139842308418:web:d15ef97311eac723ed20db',
  measurementId: 'G-JVSLPYMGLP',
};

const apps = getApps();
let firebaseApp;

if (!apps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = apps[0];
}

const db = getFirestore(firebaseApp);
export { db };
