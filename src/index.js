// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { rootReducer } from './reducers/main'
import Root from './components/Root'
import './index.scss';
import * as serviceWorker from './serviceWorker'
import { addIconLibrary } from './iconLibrary'

addIconLibrary()
const store = createStore(rootReducer)

render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.register()