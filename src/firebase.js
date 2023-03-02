import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbdl76rGrfNuDW-jpb9aMU9EBPDy-jyuc",
    authDomain: "todo-app-cp-1c0e7.firebaseapp.com",
    projectId: "todo-app-cp-1c0e7",
    storageBucket: "todo-app-cp-1c0e7.appspot.com",
    messagingSenderId: "65832192512",
    appId: "1:65832192512:web:983d644fd84c905594e6e5",
    measurementId: "G-73270JJZSL"
});

const db = firebaseApp.firestore();


export default db ;