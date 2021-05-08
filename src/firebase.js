import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8BYT5PMLcnycborPdWXlEr2J2zgsq7kY",
    authDomain: "todo-app-react-3d3c4.firebaseapp.com",
    projectId: "todo-app-react-3d3c4",
    storageBucket: "todo-app-react-3d3c4.appspot.com",
    messagingSenderId: "661792866130",
    appId: "1:661792866130:web:7baacf03930adeef7d048b",
    measurementId: "G-3MCH2LZF4F"
});

const db = firebaseApp.firestore();
//const auth = firebase.auth();

export { db };

