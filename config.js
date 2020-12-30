import firebase from 'firebase';
require ("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBUl-nxelHl3OmyQMmkPgiFhuBTpg06Dfk",
    authDomain: "book-santa-4a88b.firebaseapp.com",
    projectId: "book-santa-4a88b",
    storageBucket: "book-santa-4a88b.appspot.com",
    messagingSenderId: "503597056472",
    appId: "1:503597056472:web:a9821d8cf5aed8fc4132ad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();