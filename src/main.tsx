import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { registerInteractiveApp } from '@interactive/micro';
import 'uno.css'

registerInteractiveApp([
  {
    entry: 'https://dev-livestream.gviet.vn/interactive/app/',
    activeRule: '/interactive/app',
    $sdk: {}
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
