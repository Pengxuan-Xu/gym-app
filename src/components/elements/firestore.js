const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyBUR1IS4TT1gs8Ccix8MqciLPAmjAAELo0',
  authDomain: 'gym-app-ac7f2.firebaseapp.com',
  projectId: 'gym-app-ac7f2'
});

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

// Initialize Cloud Firestore through Firebase
export let db = firebase.firestore();