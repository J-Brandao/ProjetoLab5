import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firestore';


/*const firebaseConfig = {
    apiKey: "AIzaSyA8dkPyFBt_J3NfFVe1ayb5DJXmoAcnxWk",
    authDomain: "ssecretos-7995a.firebaseapp.com",
    databaseURL: "https://ssecretos-7995a.firebaseio.com",
    projectId: "ssecretos-7995a",
    storageBucket: "ssecretos-7995a.appspot.com",
    messagingSenderId: "830913519638",
    appId: "1:830913519638:web:8c54e32125f1f27bb71537",
    measurementId: "G-67HJJ63EBP",
    userProfile: 'utilizadores',
    attachAuthIsReady: true
};*/
var firebaseConfig = {
    apiKey: "AIzaSyCpdCgxW9MhmRg42lI9jYn_q4fqpTi2Nuw",
    authDomain: "ssecretos2.firebaseapp.com",
    databaseURL: "https://ssecretos2.firebaseio.com",
    projectId: "ssecretos2",
    storageBucket: "ssecretos2.appspot.com",
    messagingSenderId: "233233190646",
    appId: "1:233233190646:web:b88739b9497dfd796766d7",
    measurementId: "G-5J84HX5LZT",
    userProfile: 'utilizadores',
    attachAuthIsReady: true

}
firebase.initializeApp(firebaseConfig);

firebase.firestore();
export const auth = firebase.auth();

export default firebase;