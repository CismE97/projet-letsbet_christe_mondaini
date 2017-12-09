// firebase.js
import Vue from 'vue';
import firebase from 'firebase';
import VueFire from 'vuefire';

Vue.use(VueFire);

// Initialize Firebase
// Copy from google firebase console (Authentication>Web Setup)
const config = {
    apiKey: 'AIzaSyDd-Xfg9D_onz_Qb5aT7Rssf7_hp21g7DM',
    authDomain: 'letsbet-1b84b.firebaseapp.com',
    databaseURL: 'https://letsbet-1b84b.firebaseio.com',
    projectId: 'letsbet-1b84b',
    storageBucket: 'letsbet-1b84b.appspot.com',
    messagingSenderId: '54542220151'
};
export default firebase.initializeApp(config);
