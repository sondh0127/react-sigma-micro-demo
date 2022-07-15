import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { AppConfig, registerSigmaApps, MicroApp } from '@sigma-streaming/micro';

const isDev = false
export const CONTAINER_ID = 'sigma-app'

export const microApps: MicroApp[] = [
  {
    name: `@sigma-streaming/ssai`,
    entry: isDev ? 'http://localhost:4100' : 'http://123.31.18.25:2181/micro/cms/ssai/',
    activeRule: '#/sigma/ssai',
    container: `#${CONTAINER_ID}`,
  },
  {
    name: `@sigma-streaming/lrm`,
    entry: isDev ? 'http://localhost:5050/micro/cms/lrm/' : 'https://dev-livestream.gviet.vn/micro/cms/lrm/',
    activeRule: '#/sigma/lrm',
    container: `#${CONTAINER_ID}`,
  },
  // {
  //   name: `@sigma-streaming/interactive`,
  //   entry: isDev ? 'http://127.0.0.1:5555/interactive/app/' : 'https://dev-livestream.gviet.vn/interactive/app/',
  //   activeRule: '#/sigma/interactive',
  // },
]

const appConfig: AppConfig = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNLZXkiOiJkZWZhdWx0LWFwcCIsImlhdCI6MTYzOTQ2ODA2MX0.UUgc5WhOCO8-rk6ujzqxSAItoTJKg41OTD7JHMyWU9c',
  tokenType: 'x-backdoor',
}

export const actions = registerSigmaApps(microApps, appConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
