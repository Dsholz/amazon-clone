import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_jJxMq-r_UGOpWNdD1PneLGqJLgmIm4Y",
  authDomain: "clone-d0d16.firebaseapp.com",
  databaseURL: "https://clone-d0d16.firebaseio.com",
  projectId: "clone-d0d16",
  storageBucket: "clone-d0d16.appspot.com",
  messagingSenderId: "773158554734",
  appId: "1:773158554734:web:62f096433651de283c2a7f",
  measurementId: "G-NW0P8DWG3L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, GoogleProvider };
