import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducer';
import initialState from './initial_state'

import App from './App'
import './index.css'

let store = createStore(
  reducer,
  initialState
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))

store.dispatch({ type: "TICK" })

setInterval( () =>
  store.dispatch({ type: "TICK" })
, 1000)
