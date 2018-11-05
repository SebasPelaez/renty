// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore,compose } from 'redux'
import { rootReducer } from './reducers/main'
import Root from './components/Root'
import './index.scss';
import * as serviceWorker from './serviceWorker'
import { addIconLibrary } from './iconLibrary'
import firebaseConfig from './config/firebaseConfig'
import { reactReduxFirebase } from 'react-redux-firebase';

addIconLibrary()

const store = createStore(rootReducer,
  compose(
    reactReduxFirebase(firebaseConfig) // redux binding for firebase
  )
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.register()