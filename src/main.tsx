import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { AppConfig, MicroApp, registerSigmaApps } from '@sigma-streaming/micro';

export const hostVite = '//localhost:4200/'

const isProduction = false

const appConfig: AppConfig = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjc1ZDg4ZTUwNTEzM2IyNzk3MmY5N2UiLCJ1c2VybmFtZSI6Imh1Yi12dHZnbyIsInRpbWV6b25lIjoiR01UKzA3MDAgKEluZG9jaGluYSBUaW1lKSIsInB1YmxpY0tleSI6ImExMGJhMTAyLTE0MzItNDliMS05NjczLTJlNjc4Y2IyN2ZhNiJ9.1BoDg1AGmMVEZVNC4KYJDeMQWr7DLZ2Lo6xHd-i-SvQ',
  tokenProp: 'x-backdoor',
  isProduction,
}


export const microApps: MicroApp[] = [
  // {
  //   name: `@sigma-streaming/ssai`,
  //   entry: isDev ? 'http://localhost:4100' : 'http://123.31.18.25:2181/micro/cms/ssai/',
  //   activeRule: '#/sigma/ssai',
  //   container: `#${CONTAINER_ID}`,
  // },
  // {
  //   // name: `@sigma-streaming/lrm`,
  //   name: 'vite',
  //   url: hostVite,
  // },
  {
    name: 'library',
    url: '//localhost:4300/',
  },
  // {
  //   name: `@sigma-streaming/library`,
  //   entry: isDev ? 'http://localhost:4200' : 'https://dev-livestream.gviet.vn/micro/cms/library/',
  //   activeRule: '#/sigma/library',
  //   container: `#${CONTAINER_ID}`,
  // },
  // {
  //   name: `@sigma-streaming/transcode`,
  //   entry: isDev ? 'http://localhost:4200' : 'https://dev-livestream.gviet.vn/micro/cms/transcode-live/',
  //   activeRule: '#/sigma/transcode',
  //   container: `#${CONTAINER_ID}`,
  // },
  // {
  //   name: `@sigma-streaming/interactive`,
  //   entry: isDev ? 'http://127.0.0.1:5555/interactive/app/' : 'https://dev-livestream.gviet.vn/interactive/app/',
  //   activeRule: '#/sigma/interactive',
  // },
]

export const actions = registerSigmaApps(microApps, appConfig);
console.log('[LOG] ~ file: main.tsx ~ line 52 ~ actions', actions)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
