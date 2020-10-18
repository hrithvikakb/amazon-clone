import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCthy8mcFd3LAa8_v6JhXy4uhojAvyxqr8",
    authDomain: "clone-67ebf.firebaseapp.com",
    databaseURL: "https://clone-67ebf.firebaseio.com",
    projectId: "clone-67ebf",
    storageBucket: "clone-67ebf.appspot.com",
    messagingSenderId: "173917723146",
    appId: "1:173917723146:web:b0a268f2f45c0d02adddf3",
    measurementId: "G-D69BPDXE6S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };