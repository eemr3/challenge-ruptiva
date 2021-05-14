import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzgp7l_RFzTOOkpgG6Vjome_Jspq75ZA8",
  authDomain: "ruptiva-challeng.firebaseapp.com",
  projectId: "ruptiva-challeng",
  storageBucket: "ruptiva-challeng.appspot.com",
  messagingSenderId: "503829255821",
  appId: "1:503829255821:web:b1e219860da1699d7e74c4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
