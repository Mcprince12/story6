import firebase from 'firebase'
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCqDcEnkQsnkFhvXjWS-QevYpy7qlqeeAA",
  authDomain: "story-app-45d3e.firebaseapp.com",
  projectId: "story-app-45d3e",
  storageBucket: "story-app-45d3e.appspot.com",
  messagingSenderId: "534565361962",
  appId: "1:534565361962:web:86d7baa06a24693b446653"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();