import { initGlobalState, registerMicroApps, runAfterFirstMounted, start } from 'qiankun'

export interface GlobalState {
  tokenProp?: 'x-access-token' | 'x-backdoor'
  token: string
  livestreamId: string
  [key: string]: any
}

interface AppConfig {
  entry: string
  activeRule: string
  name: string
}

export type SigmaAppConfig = AppConfig[]

export type OnGlobalStateChangeCallback = (newState: GlobalState, prevState: GlobalState) => void

export function initSigmaState(globalState: GlobalState) {
  const $state: { value: GlobalState } = {
    value: { tokenProp: 'x-backdoor', ...globalState },
  }

  const actions = initGlobalState($state.value)
  actions.onGlobalStateChange(newValue => $state.value = newValue as GlobalState)

  return {
    onGlobalStateChange: (
      callback: OnGlobalStateChangeCallback,
      fireImmediately?: boolean
    ) => {
      actions.onGlobalStateChange((newValue, prevValue) => {
        callback(newValue as GlobalState, prevValue as GlobalState)
      }, fireImmediately)
    },
    offGlobalStateChange: actions.offGlobalStateChange,
    setGlobalState: (state: GlobalState) => actions.setGlobalState(state),
    updateGlobalState: (cb: (_state: GlobalState) => GlobalState) => {
      actions.setGlobalState(cb($state.value))
    },
  }
}

export function registerSigmaApp(config: SigmaAppConfig,
) {
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
      return new Promise((resolve, reject) => {
        resolve('beforeLoad')
      })
    }],
    beforeMount: [() => {
      return new Promise((resolve, reject) => {
        resolve('beforeMount')
      })
    }],
    afterUnmount: [() => {
      return new Promise((resolve, reject) => {
        resolve('afterUnmount')
      })
    }],
    beforeUnmount: [() => {
      return new Promise((resolve, reject) => {
        resolve('beforeUnmount')
      })
    }],
  })

  runAfterFirstMounted(() => { })

  start({ prefetch: true, sandbox: true })
}
