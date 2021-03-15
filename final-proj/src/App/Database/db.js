import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyClPpmWApPjQRvXNI5og7p4a92ayUWB7rg",
    authDomain: "hcde438-final.firebaseapp.com",
    projectId: "hcde438-final",
    storageBucket: "hcde438-final.appspot.com",
    messagingSenderId: "867913990535",
    appId: "1:867913990535:web:e7658752e3c42520301322",
    measurementId: "G-NSGBKXMJ94"
});

export const signInWithGoogle = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider).then((result) => { /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch((error) => { // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

export const sendMessage = async (messagesRef, formValue) => {
    const {uid, photoURL} = auth.currentUser;
    await messagesRef.add({text: formValue, createdAt: firebase.firestore.FieldValue.serverTimestamp(), uid, photoURL})
}

export const signOut = () => {
    firebase.auth().signOut().then(() => {
        console.log('signout successful')
    }).catch((error) => {
        console.log(error)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
