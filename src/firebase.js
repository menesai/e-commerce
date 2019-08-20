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

  export const userDocument = async (userAuth, additionalData) =>{
    if(!auth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    // console.log(userRef)
    const snapShot = await userRef.get()
    // console.log(snapShot)

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(err){
        console.log(err)
      }
    }
    return userRef;
  }


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



   export const auth = firebase.auth();
   export const firestore = firebase.firestore();

   export const provider = new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt: 'Select Account'});
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;