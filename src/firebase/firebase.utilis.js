import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEoKwp5Cd8Cw_JXSh0CjJRC74qJvMux3s",
  authDomain: "crwn-cloths.firebaseapp.com",
  databaseURL: "https://crwn-cloths.firebaseio.com",
  projectId: "crwn-cloths",
  storageBucket: "",
  messagingSenderId: "752522319979",
  appId: "1:752522319979:web:0444e3cef5377795"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
