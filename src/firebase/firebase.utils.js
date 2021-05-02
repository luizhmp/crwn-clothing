import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUrhc-YOY0vOCGGp-EpNqxGlAZ2cQjUmk",
  authDomain: "crwn-db-dec89.firebaseapp.com",
  projectId: "crwn-db-dec89",
  storageBucket: "crwn-db-dec89.appspot.com",
  messagingSenderId: "131684047568",
  appId: "1:131684047568:web:e3bc89765aef097ddcdcd5",
  measurementId: "G-SERT4ZMFGJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
