import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { AppConfig, registerSigmaApps, MicroApp } from './micro';

const isDev = true
const CONTAINER = '#sigma-app'

export const microApps: MicroApp[] = [
  {
    name: `@sigma-streaming/ssai`,
    entry: isDev ? 'http://localhost:4100' : 'http://123.31.18.25:2181/micro/cms/ssai/',
    activeRule: '#/sigma/ssai',
    container: CONTAINER
  },
  {
    name: `@sigma-streaming/lrm`,
    entry: isDev ? 'http://localhost:4200' : 'https://dev-livestream.gviet.vn/micro/cms/lrm/',
    activeRule: '#/sigma/lrm',
    container: CONTAINER
  },
  // {
  //   name: `@sigma-streaming/interactive`,
  //   entry: isDev ? 'http://127.0.0.1:5555/interactive/app/' : 'https://dev-livestream.gviet.vn/interactive/app/',
  //   activeRule: '#/sigma/interactive',
  // },
]

const appConfig: AppConfig = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNLZXkiOiJkZWZhdWx0LWFwcCIsImlhdCI6MTYzOTQ2ODA2MX0.UUgc5WhOCO8-rk6ujzqxSAItoTJKg41OTD7JHMyWU9c',
  livestreamId: 'c9c2ebfb-2887-4de6-aec4-0a30aa848915',
  tokenProp: 'x-backdoor',
}

export const { actions, globalState } = registerSigmaApps(microApps, appConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
