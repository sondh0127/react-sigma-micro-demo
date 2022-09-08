import '@unocss/reset/tailwind.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'uno.css'
import App from './App'
import { AppConfig, MicroApp, registerSigmaApps } from '@sigma-streaming/micro';

export const hostVite = '//localhost:4200/'

const appConfig: AppConfig = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mjc1ZDg4ZTUwNTEzM2IyNzk3MmY5N2UiLCJ1c2VybmFtZSI6Imh1Yi12dHZnbyIsInRpbWV6b25lIjoiR01UKzA3MDAgKEluZG9jaGluYSBUaW1lKSIsInB1YmxpY0tleSI6ImExMGJhMTAyLTE0MzItNDliMS05NjczLTJlNjc4Y2IyN2ZhNiJ9.1BoDg1AGmMVEZVNC4KYJDeMQWr7DLZ2Lo6xHd-i-SvQ',
  tokenProp: 'x-backdoor',
}

export const libraryHost = '//dev-livestream.gviet.vn/micro/cms/library/'
export const lrmHost = '//dev-livestream.gviet.vn/micro/cms/lrm/'
export const transcodeHost = '//localhost:4200/'
// export const libraryHost = '//localhost:4300/'

export const microApps: MicroApp[] = [
  // {
  //   name: 'library',
  //   url: libraryHost,
  // },
  // {
  //   name: 'lrm',
  //   url: lrmHost,
  // },
  {
    name: 'transcode',
    url: transcodeHost,
    preload: true,
  },
]

export const actions = registerSigmaApps(microApps, appConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
