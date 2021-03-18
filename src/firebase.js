import firebase  from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaWLUeoUid4gRtYjjYhv_KzoKUg_RiVIM",
    authDomain: "twitter-app-clone-4fde4.firebaseapp.com",
    projectId: "twitter-app-clone-4fde4",
    storageBucket: "twitter-app-clone-4fde4.appspot.com",
    messagingSenderId: "39892862644",
    appId: "1:39892862644:web:29fff24256aacd6b0bb9e1",
    measurementId: "G-XXY7S1Z1GY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;