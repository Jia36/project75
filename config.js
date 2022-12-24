import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDEuhXBiD-5YHLUM9S-dP_m4sjyiLZOGes",
  authDomain: "projects-71.firebaseapp.com",
  projectId: "projects-71",
  storageBucket: "projects-71.appspot.com",
  messagingSenderId: "958495513844",
  appId: "1:958495513844:web:a6d29e6fc5ce771325d2a1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
