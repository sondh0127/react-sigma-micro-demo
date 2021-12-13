import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: '@interactive/app',
    entry: 'https://dev-livestream.gviet.vn/interactive/app/',
    container: '#sub-app',
    // loader: (loading) => render({ loading }),
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
