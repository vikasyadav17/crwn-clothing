import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAm6npemMjMUYGFCND9Uy0Uf-JRCYi_2pA",
  authDomain: "crwn-db-17d3a.firebaseapp.com",
  projectId: "crwn-db-17d3a",
  storageBucket: "crwn-db-17d3a.appspot.com",
  messagingSenderId: "670935596683",
  appId: "1:670935596683:web:179a2cc74710338c181e8e",
  measurementId: "G-WWW778W6WM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
