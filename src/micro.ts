import { initGlobalState, registerMicroApps, runAfterFirstMounted, start } from 'qiankun'
import { proxy } from 'valtio'
import { ensureSuffix, p } from '@antfu/utils'

interface MenuItem {
  name: string
  meta: Record<string, any>
  path: string
  children: MenuItem[] | undefined
}

interface ChildApp {
  name: string,
  routes: MenuItem[]
}

export interface GlobalState {
  tokenProp?: 'x-access-token' | 'x-backdoor'
  token: string
  livestreamId: string
  children: ChildApp[]
  [key: string]: any
}

interface AppConfig {
  entry: string
  activeRule: string
  name: string
}

export type SigmaAppConfig = AppConfig[]

export type OnGlobalStateChangeCallback = (newState: GlobalState, prevState: GlobalState) => void

const defaultState = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNLZXkiOiJkZWZhdWx0LWFwcCIsImlhdCI6MTYzOTQ2ODA2MX0.UUgc5WhOCO8-rk6ujzqxSAItoTJKg41OTD7JHMyWU9c',
  livestreamId: 'c9c2ebfb-2887-4de6-aec4-0a30aa848915',
  tokenProp: 'x-backdoor',
  hello: 'world2',
  children: [] // as ChildApp[]
}

export const microState = proxy({ ...defaultState })

export const actions = initGlobalState({ ...defaultState })

actions.onGlobalStateChange((newState) => {
  console.log('[LOG] ~ file: micro.ts ~ line 56 ~ newState', newState)
  Object.assign(microState, newState)
}, true)


export function registerSigmaApp(config: SigmaAppConfig) {
  // Make everything with defu
  const apps = config.map(({ name, entry, activeRule }) => {
    return {
      name,
      activeRule,
      entry,
      container: '#sigma-app',
      props: {
        activeRule,
      }
    }
  })

  registerMicroApps(apps, {
    beforeLoad: [() => {
      console.log('[LOG] ~ file: micro.ts ~ line 68 ~ beforeLoad')
      return new Promise((resolve, reject) => {
        resolve('beforeLoad')
      })
    }],
    beforeMount: [() => {
      console.log('[LOG] ~ file: micro.ts ~ line 68 ~ beforeMount')

      return new Promise((resolve, reject) => {
        resolve('beforeMount')
      })
    }],
    afterUnmount: [() => {
      console.log('[LOG] ~ file: micro.ts ~ line 68 ~ afterUnmount')

      return new Promise((resolve, reject) => {
        resolve('afterUnmount')
      })
    }],
    beforeUnmount: [() => {
      console.log('[LOG] ~ file: micro.ts ~ line 68 ~ beforeUnmount')

      return new Promise((resolve, reject) => {
        resolve('beforeUnmount')
      })
    }],
  })

  runAfterFirstMounted(() => { })

  start({
    prefetch: 'all',
    sandbox: true,
  })

  async function getRoutes(url: string) {
    const res = await fetch(url)
    const json = await res.json()
    return json
  }

  async function getMenu() {
    const menus = await p(apps)
      .map(async app => {
        return {
          ...app,
          routes: await getRoutes(`${ensureSuffix('/', app.entry)}routes.json`)
        }
      })

    actions.setGlobalState({ children: menus })
  }
  getMenu()
}
