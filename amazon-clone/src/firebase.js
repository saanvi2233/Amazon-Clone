// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'; // Use 'compat' for compatibility mode if necessary
import 'firebase/compat/auth'; // Ensure you are importing the 'auth' submodule


const firebaseConfig = {
  apiKey: "AIzaSyADrdIj1vkt5GFxHFBzrXrn2rtAIHyPIB8",
  authDomain: "challenge-83d5b.firebaseapp.com",
  projectId: "challenge-83d5b",
  storageBucket: "challenge-83d5b.appspot.com",
  messagingSenderId: "304838470359",
  appId: "1:304838470359:web:48b0ee07d38cd44ee55e92",
  measurementId: "G-KMV692M0QG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };