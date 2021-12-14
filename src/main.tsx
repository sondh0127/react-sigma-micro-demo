import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { registerInteractiveApp } from '@sigma-interactive/micro';


export const actions = registerInteractiveApp(
  [
    {
      entry: 'http://localhost:3333/',
      activeRule: '#/editor/interactive-app',
    },
  ],
  {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiIyOWY2NWUwMC0xZWU1LTQwZjAtYWZhNS0zM2MyODE5ODI4ODMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjM3NDcyODkyfQ.HQoeTm1khKSurFhgyWnnrRSvoMS0IJ-IVsBln5nCD4A',
    livestreamId: 'c9c2ebfb-2887-4de6-aec4-0a30aa848915'
  }
);

// actions.onGlobalStateChange((newState, prevState) => {}, true)
// actions.updateGlobalState((state) => {
//   return {...state}
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
