import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBZZKLUHg503gFmXy-UPxllq68PktG5Fs4",
    authDomain: "ecomerce-6cad7.firebaseapp.com",
    databaseURL: "https://ecomerce-6cad7.firebaseio.com",
    projectId: "ecomerce-6cad7",
    storageBucket: "",
    messagingSenderId: "705694749315",
    appId: "1:705694749315:web:d52aff1f59eeff42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   export const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'Select Account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;