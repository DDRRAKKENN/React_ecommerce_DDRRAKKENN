import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDCg5MaxG79_Gh3UaGgGydqLsfb8bLpOI",
  authDomain: "react-lara-utn.firebaseapp.com",
  projectId: "react-lara-utn",
  storageBucket: "react-lara-utn.appspot.com",
  messagingSenderId: "894299250363",
  appId: "1:894299250363:web:b5621defcc5b6a7ce5139e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
firebase.auth=firebase.auth();
firebase.db=db;

export default firebase;
