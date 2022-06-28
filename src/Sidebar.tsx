import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { actions } from './main';
import { GlobalState, getMicroPath } from '@sigma-streaming/micro'


interface SidebarProps {
}

const Sidebar = (props: SidebarProps) => {
  const history = useHistory();
  const [state, setState] = useState<GlobalState>()

  useEffect(() => {
    actions.onGlobalStateChange((newState) => {
      setState(newState)
    }, true)
  }, [])

  function selectRoute(path: string, name: string) {
    const routePath = getMicroPath(path, name)
    if (routePath) history.replace(routePath)
  }

  return (
    <div>
      <div className="font-bold flex justify-center">Navigation</div>
      <div>
        {state?.children.map(app => {
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
