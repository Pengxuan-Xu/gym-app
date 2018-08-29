import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js'
import { Provider } from 'react-redux'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gymApp from './components/redux/reducers.js'

const store = createStore(gymApp,applyMiddleware(thunk));


  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
 
store.subscribe(()=>{
  console.log(store.getState())
})