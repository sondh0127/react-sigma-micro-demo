import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { registerSigmaApp } from './micro';

registerSigmaApp(
  [
    {
      name:  `@sigma-streaming/ssai`,
      entry: import.meta.env.DEV ? 'http://localhost:4100': 'http://123.31.18.25:2181/micro/cms/ssai/',
      activeRule: '#/sigma/ssai',
    },
  ],
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
