import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { registerMicroApps, start } from 'qiankun';
import 'uno.css'

registerMicroApps([
  {
    name: '@interactive/app',
    entry: 'https://dev-livestream.gviet.vn/interactive/app/',
    container: '#sub-app',
    activeRule: '/interactive/app',
  },
]);

start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
