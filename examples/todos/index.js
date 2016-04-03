import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const initialState = {}
  // visibilityFilter: 'SHOW_ALL',
  // todos:
  //   [
  //       {
  //           id: 1388534400000,
  //           text: "Hey there!",
  //           completed: false
  //       }
  //   ]
// }

// let store = createStore(todoApp, initialState)

const loggerMiddleware = createLogger()
let store = createStore(
    todoApp,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
