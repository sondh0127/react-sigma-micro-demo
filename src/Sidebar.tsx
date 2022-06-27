import { useHistory } from "react-router-dom";
import { useSnapshot } from 'valtio';
import { microApps } from './main';
import { microState } from './micro';

export function getMicroPath(path: string, name: string) {
  const app = microApps.find(item => item.name === name)
  if (app) {
    const basePath = app.activeRule.startsWith('#') ? app.activeRule.substring(1) : app.activeRule
    return `${basePath}${path}`
  }

}

interface SidebarProps {
}

const Sidebar = (props: SidebarProps) => {
  const snap = useSnapshot(microState)
  const history = useHistory();

  function selectRoute(path: string, name: string) {
    console.log('[LOG] ~ file: Sidebar.tsx ~ line 19 ~ path', path)
    const routePath = getMicroPath(path, name)
    console.log('[LOG] ~ file: Sidebar.tsx ~ line 21 ~ routePath', routePath)
    if (routePath) history.replace(routePath)
  }
  return (
    <div>
      <div className="font-bold flex justify-center">Navigation</div>
      <div>
        {snap.children.map(app => {
          return (
            <div key={app.name}>
              <div>
                {app.name}
                {
                  app.routes.map(route => {
                    if (route.children) {
                      return (
                        <div key={route.name} >
                          <div className="flex items-center h-30px w-full bg-green px-12px">{route.meta.title}</div>
                          <div className="pl-12px">
                            {
                              route.children.map(c => {
                                return (
                                  <button onClick={() => selectRoute(c.path, app.name)} className="flex items-center h-30px w-full bg-green px-12px" key={c.name}>
                                    {c.meta.title}
                                  </button>
                                )
                              })
                            }
                          </div>
                        </div>
                      )
                    }

                    return (
                      <button key={route.name} onClick={() => selectRoute(route.path, app.name)} className="flex items-center h-30px w-full bg-green px-12px">
                        {route.meta.title}
                      </button>
                    )
                  })
                }
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
