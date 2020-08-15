import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBpZDPrPKsAxLq8pzEc-rbL6gAhjPVhpLE",
  authDomain: "tinder-clone-8b118.firebaseapp.com",
  databaseURL: "https://tinder-clone-8b118.firebaseio.com",
  projectId: "tinder-clone-8b118",
  storageBucket: "tinder-clone-8b118.appspot.com",
  messagingSenderId: "100094622366",
  appId: "1:100094622366:web:35b2aaa3d1b67095fa198f",
  measurementId: "G-TSL90SKVE3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

// const auth = app.auth();

export { db };