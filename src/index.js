import React from 'react'
import ReactDOM from 'react-dom'
import App from 'pages/Main'

import { Provider } from 'react-redux'

import store from 'store'
import 'style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
