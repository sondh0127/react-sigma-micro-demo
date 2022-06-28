import { FrameworkLifeCycles, initGlobalState, registerMicroApps, RegistrableApp, runAfterFirstMounted, start } from 'qiankun'
import { proxy } from 'valtio'
import { ensureSuffix, p } from '@antfu/utils'

export interface MenuItem {
  name: string
  meta: Record<string, any>
  path: string
  children: MenuItem[] | undefined
}

export interface ChildApp {
  name: string,
  routes: MenuItem[]
}

export interface AppConfig {
  tokenProp?: 'x-access-token' | 'x-backdoor'
  token: string
  livestreamId: string
}

export interface GlobalState extends AppConfig {
  children: ChildApp[]
  [key: string]: any
}

export interface MicroApp {
  entry: string
  activeRule: string
  name: string
  container: string
}

export interface AppProps {
  activeRule: string
}

export function registerSigmaApps(registrableApps: MicroApp[], appConfig: AppConfig, lifeCycles?: FrameworkLifeCycles<AppProps>) {
  const defaultState: GlobalState = Object.assign({
    token: '',
    livestreamId: '',
    tokenProp: 'x-backdoor',
    children: [] // as ChildApp[]
  }, appConfig)

  const globalState = proxy({ ...defaultState })
  const actions = initGlobalState({ ...defaultState })

  actions.onGlobalStateChange((newState) => {
    Object.assign(globalState, newState)
  }, true)

  const apps: RegistrableApp<AppProps>[] = registrableApps.map(({ name, entry, activeRule, container }) => {
    return {
      name, activeRule, entry, container, props: { activeRule, }
    }
  })

  registerMicroApps(apps, lifeCycles)

  runAfterFirstMounted(() => { })

  start({ prefetch: 'all', sandbox: true })

  async function getRoutes(url: string) {
    const res = await fetch(url)
    const json = await res.json()
    return json
  }

  async function getMenu() {
    const menus = await p(apps)
      .map(async app => {
        let routes = []

        try {
          routes = await getRoutes(`${ensureSuffix('/', app.entry)}routes.json`)
        } catch (e) {

        }
        return {
          ...app,
          routes
        }
      })

    actions.setGlobalState({ children: menus })
  }

  getMenu()

  return {
    globalState,
    actions
  }
}
