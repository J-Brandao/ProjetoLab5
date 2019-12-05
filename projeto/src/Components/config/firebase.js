import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8dkPyFBt_J3NfFVe1ayb5DJXmoAcnxWk",
    authDomain: "ssecretos-7995a.firebaseapp.com",
    databaseURL: "https://ssecretos-7995a.firebaseio.com",
    projectId: "ssecretos-7995a",
    storageBucket: "ssecretos-7995a.appspot.com",
    messagingSenderId: "830913519638",
    appId: "1:830913519638:web:8c54e32125f1f27bb71537",
    measurementId: "G-67HJJ63EBP"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;