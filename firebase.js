import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyAU2JmMelUzgJekD0MsZ6exRYzzBvP3DVc",
  authDomain: "flutter-gradient.firebaseapp.com",
  projectId: "flutter-gradient",
  storageBucket: "flutter-gradient.appspot.com",
  messagingSenderId: "1089052451376",
  appId: "1:1089052451376:web:ae3adbcaad3a2e87f8c3f5",
  measurementId: "G-8DDH7EWQ4Z",
};

firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics;

export { firebase, analytics };
