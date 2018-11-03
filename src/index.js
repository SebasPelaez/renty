// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { rootReducer } from './reducers/main'
import Root from './components/Root'
import './index.scss';
import * as serviceWorker from './serviceWorker'
import { addIconLibrary } from './iconLibrary'
import firebase from 'firebase'

addIconLibrary()
const store = createStore(rootReducer)

firebase.initializeApp({
  apiKey: "AIzaSyD18v6z7ZhNlNehe2K9kHm9kJM0INcO2Hs",
  authDomain: "renty-77761.firebaseapp.com",
  databaseURL: "https://renty-77761.firebaseio.com",
  projectId: "renty-77761",
  storageBucket: "renty-77761.appspot.com",
  messagingSenderId: "936238349942"
})

render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.register()