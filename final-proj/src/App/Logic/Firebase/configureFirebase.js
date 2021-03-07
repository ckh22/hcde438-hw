import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyClPpmWApPjQRvXNI5og7p4a92ayUWB7rg",
    authDomain: "hcde438-final.firebaseapp.com",
    databaseURL: "https://hcde438-final-default-rtdb.firebaseio.com",
    projectId: "hcde438-final",
    storageBucket: "hcde438-final.appspot.com",
    messagingSenderId: "867913990535",
    appId: "1:867913990535:web:e7658752e3c42520301322",
    measurementId: "G-NSGBKXMJ94"
};

export function initialize() {
    firebase.initializeApp(firebaseConfig)
}