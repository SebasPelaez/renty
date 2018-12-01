import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.scss'
import { render } from 'react-dom'
import { createLogger } from 'redux-logger'
import { addIconLibrary } from './iconLibrary'
import { reactReduxFirebase } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux'
import React from 'react'
import Root from './components/Root'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/main'
import firebaseApp from './config/firebaseApp'
import * as serviceWorker from './serviceWorker'

const ENV = require('dotenv')
ENV.config()

addIconLibrary()

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    reactReduxFirebase(firebaseApp)
  )
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.register()