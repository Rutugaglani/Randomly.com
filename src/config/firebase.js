import firebase from 'firebase';
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyCbJv-H-uYvu4eoGLyG_mbGTHE5bbHonis",
    authDomain: "login-signup-d0d31.firebaseapp.com",
    databaseURL: "https://login-signup-d0d31.firebaseio.com",
    projectId: "login-signup-d0d31",
    storageBucket: "login-signup-d0d31.appspot.com",
    messagingSenderId: "253439349760",
    appId: "1:253439349760:web:95eb99e401f8ba5e91f4e5",
    measurementId: "G-ZSDQ1VQS9D"
  };
  const fire = firebase.initializeApp(firebaseConfig)
  export default fire;