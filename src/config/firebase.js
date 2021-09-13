// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASwbnZhxi2Fw6guDN9OHl9EALhF_lJeL0",
  authDomain: "uollet-cb0b4.firebaseapp.com",
  projectId: "uollet-cb0b4",
  storageBucket: "uollet-cb0b4.appspot.com",
  messagingSenderId: "413545501528",
  appId: "1:413545501528:web:efb1311ab7a2c5e2aa4b2d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;