import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history' 
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
