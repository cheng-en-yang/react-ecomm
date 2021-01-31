import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRDr-09Vx07v6bNypgHkcie3EzXVS-jr8",
    authDomain: "react-ecomm-db-8771e.firebaseapp.com",
    projectId: "react-ecomm-db-8771e",
    storageBucket: "react-ecomm-db-8771e.appspot.com",
    messagingSenderId: "779375194402",
    appId: "1:779375194402:web:bbfa7095081a3e8db6357b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;