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


export const libraryHost = '//dev-livestream.gviet.vn/micro/cms/library/'

export const microApps: MicroApp[] = [
  {
    name: 'library',
    url: libraryHost,
  },
]

export const actions = registerSigmaApps(microApps, appConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
