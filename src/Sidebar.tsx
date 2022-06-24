import { useHistory } from "react-router-dom";
import { useSnapshot } from 'valtio';
import { microApps } from './main';
import { microState } from './micro';

export function getMicroPath(path: string, name: string) {
  const app = microApps.find(item => item.name === name)
  if (app) return `${app.activeRule}${path}`
}

interface SidebarProps {
}

const Sidebar = (props: SidebarProps) => {
  const snap = useSnapshot(microState)
  const history = useHistory();

  function selectRoute(path: string, name: string) {
    const routePath = getMicroPath(path, name)
    if (routePath) history.push(routePath)
  }
  return (
    <div>
      <div className="font-bold flex justify-center">Navigation</div>
      <div>
        {snap.children.map(app => {
          return (
            <div key={app.name}>
              {
                app.routes.map(route => {
                  return (
                    <button onClick={() => selectRoute(route.path, app.name)} className="flex items-center h-30px w-full bg-green px-12px" key={route.name}>
                      {route.meta.title}
                    </button>
                  )
                })
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
