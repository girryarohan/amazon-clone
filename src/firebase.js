import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6hDp68CxPtSnitsNX6CBgHNjTVwmBsLI",
  authDomain: "clone-863e8.firebaseapp.com",
  projectId: "clone-863e8",
  storageBucket: "clone-863e8.appspot.com",
  messagingSenderId: "863443442631",
  appId: "1:863443442631:web:55b4bff318257c067ed7e2",
  measurementId: "G-SD8LY8JFKJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
