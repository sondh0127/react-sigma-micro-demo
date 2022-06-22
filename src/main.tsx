import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { registerSigmaApp } from './micro';

const isDev = true
registerSigmaApp(
  [
    {
      name:  `@sigma-streaming/ssai`,
      entry: isDev ? 'http://localhost:4100': 'http://123.31.18.25:2181/micro/cms/ssai/',
      activeRule: '#/sigma/ssai',
    },
    // {
    //   name:  `@sigma-streaming/lrm`,
    //   entry: isDev ? 'http://localhost:4200': 'http://123.31.18.25:2181/micro/cms/lrm/',
    //   activeRule: '#/sigma/lrm',
    // },
  ],
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
