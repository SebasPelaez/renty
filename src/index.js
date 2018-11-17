import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/main'
import Root from './components/Root'
import './index.scss';
import * as serviceWorker from './serviceWorker'
import { addIconLibrary } from './iconLibrary'
import firebaseConfig from './config/firebaseConfig'
import { reactReduxFirebase } from 'react-redux-firebase';

addIconLibrary()

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    reactReduxFirebase(firebaseConfig)
  )
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.register()