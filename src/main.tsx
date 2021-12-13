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
    $sdk: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiIyOWY2NWUwMC0xZWU1LTQwZjAtYWZhNS0zM2MyODE5ODI4ODMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjM3NDcyODkyfQ.HQoeTm1khKSurFhgyWnnrRSvoMS0IJ-IVsBln5nCD4A'
    }
  },
]);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
