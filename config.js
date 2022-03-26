import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChCffBuUhZBa0MbUoo-s00853jes1PHK0",
  authDomain: "pro71-93bea.firebaseapp.com",
  projectId: "pro71-93bea",
  storageBucket: "pro71-93bea.appspot.com",
  messagingSenderId: "795475406364",
  appId: "1:795475406364:web:f4d8a2830da1c1c05039d9",
  measurementId: "G-8CLGD3TSM1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
