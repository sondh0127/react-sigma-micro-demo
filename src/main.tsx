import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { registerSigmaApp } from './micro';

const isDev = true

export const microApps = [
  // {
  //   name: `@sigma-streaming/ssai`,
  //   entry: isDev ? 'http://localhost:4100' : 'http://123.31.18.25:2181/micro/cms/ssai/',
  //   activeRule: '#/sigma/ssai',
  // },
  // {
  //   name: `@sigma-streaming/lrm`,
  //   entry: isDev ? 'http://localhost:4200' : 'https://dev-livestream.gviet.vn/micro/cms/lrm/',
  //   activeRule: '#/sigma/lrm',
  // },
  {
    name: `@sigma-streaming/interactive`,
    entry: isDev ? 'http://127.0.0.1:5555/interactive/app/' : 'https://dev-livestream.gviet.vn/interactive/app/',
    activeRule: '#/sigma/interactive',
  },
]

registerSigmaApp(microApps);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
