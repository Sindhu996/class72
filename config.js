import firebase from "firebase";
require("@firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjJDAIlmcvRCfnE-u8po0dDdJYn255IJk",
  authDomain: "sample70-e88dc.firebaseapp.com",
  projectId: "sample70-e88dc",
  storageBucket: "sample70-e88dc.appspot.com",
  messagingSenderId: "534913414702",
  appId: "1:534913414702:web:4d062f9398af7e638351bf"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
