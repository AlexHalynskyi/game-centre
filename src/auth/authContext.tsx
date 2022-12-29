import { createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const Context = createContext({});

const firebaseConfig = {
  apiKey: "AIzaSyDXAwBhfr6pP0vtt-8YEN4rapmw7MWQA3M",
  authDomain: "game-centre-67e49.firebaseapp.com",
  databaseURL: "https://game-centre-67e49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "game-centre-67e49",
  storageBucket: "game-centre-67e49.appspot.com",
  messagingSenderId: "785403291451",
  appId: "1:785403291451:web:97ad20cd039dd65a67f91e",
  measurementId: "G-LN2Q2EWJ8V"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export const useFirebase = () => {
  return {
    firebase,
    auth,
    firestore,
  }
};
