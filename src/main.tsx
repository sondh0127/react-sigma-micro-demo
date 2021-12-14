import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { registerInteractiveApp } from '@sigma-interactive/micro';

registerInteractiveApp(
  [
    {
      entry: 'http://localhost:3333/',
      activeRule: '#/editor/interactive-app',
    },
  ],
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
