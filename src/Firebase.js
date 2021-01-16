import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAARwhzEnRdP7jlBjKXqdwWpdCRk27ork8",
    authDomain: "todo-app-cp-59176.firebaseapp.com",
    projectId: "todo-app-cp-59176",
    storageBucket: "todo-app-cp-59176.appspot.com",
    messagingSenderId: "381737976008",
    appId: "1:381737976008:web:4d04eeebf4e24d3265a5fd",
    measurementId: "G-38THFZX9S1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;