import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAZPjHbSd3UXLjjd_tUy4JpnRkCYnjjHCo",
  authDomain: "react-authentication-524e3.firebaseapp.com",
  projectId: "react-authentication-524e3",
  storageBucket: "react-authentication-524e3.appspot.com",
  messagingSenderId: "852133287474",
  appId: "1:852133287474:web:1ca02410fc54a5b9d64e2b",
  measurementId: "G-EYVQ3P9HR4",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase