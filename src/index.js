import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './component/App'
import store from './store'
import calculator from './storeCal'
ReactDOM.render(
  <Provider store={calculator}>
    <App />
  </Provider>,
  document.getElementById('root')
)
