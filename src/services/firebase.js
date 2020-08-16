import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvlpF-z4OyyB4y0q-HnTke_gXaC_04vkc",
    authDomain: "mismatch-chat.firebaseapp.com",
    databaseURL: "https://mismatch-chat.firebaseio.com",
    projectId: "mismatch-chat",
    storageBucket: "mismatch-chat.appspot.com",
    messagingSenderId: "1077548315886",
    appId: "1:1077548315886:web:4c5a91db6da0165ed4efff",
    measurementId: "G-JD5K4HXWNN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth;
export const db = firebase.database();