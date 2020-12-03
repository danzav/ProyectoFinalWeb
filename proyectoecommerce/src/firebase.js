import firebase from 'firebase/app'

require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyCVEr1s0abhmqOyr_oKb0tGrMmRaFDmevA",
    authDomain: "ecomm-af3f6.firebaseapp.com",
    projectId: "ecomm-af3f6",
    storageBucket: "ecomm-af3f6.appspot.com",
    messagingSenderId: "142351419329",
    appId: "1:142351419329:web:201a5c8d63191cbf0fd140",
    measurementId: "G-BNTEES5LM3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 const auth= firebase.auth()
 const db = firebase.firestore()
 const storage= firebase.storage()
 const functions = firebase.functions()

 export {
   firebase,
   auth,
   db,
   storage,
   functions
 }
