import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDBeSIrxjqaJ0aIAtzsNrwK154ZWp4Y5fE",
    authDomain: "fakestore-a1baf.firebaseapp.com",
    projectId: "fakestore-a1baf",
    storageBucket: "fakestore-a1baf.appspot.com",
    messagingSenderId: "520232984443",
    appId: "1:520232984443:web:deab24473450052149a7de",
    measurementId: "G-H0NT76SM7J"
  };


// Initialize Firebase
const Firebase = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const db = firebase.firestore();

export default Firebase;

