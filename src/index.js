import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js'
import { Provider } from 'react-redux'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import gymApp from './components/containers/reducers.js'

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
var db = firebase.firestore();


db.collection("State").doc('mvp6wJl6PmOnYwWCyxVK').get().then((doc) => {
  let initialState = doc.data();
  const store = createStore(gymApp,initialState)
  let updateRef = db.collection("State").doc('mvp6wJl6PmOnYwWCyxVK');
  store.subscribe(() => {
    console.log("damn")
    updateRef.update(store.getState())

  }
  )

  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
 });
