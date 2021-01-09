import firebase from 'firebase'
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyD0qHFSk-bWWyR6U9d3jX6fQCyBy5AhKtE",
    authDomain: "storyhub-33d88.firebaseapp.com",
    databaseURL: "https://storyhub-33d88-default-rtdb.firebaseio.com",
    projectId: "storyhub-33d88",
    storageBucket: "storyhub-33d88.appspot.com",
    messagingSenderId: "878041809806",
    appId: "1:878041809806:web:7856a8e3e00493883b9adf"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();