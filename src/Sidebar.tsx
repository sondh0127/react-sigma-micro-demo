import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { actions } from './main';
import { GlobalState } from '@sigma-streaming/micro'
import { Menu, MenuProps } from "antd";


interface SidebarProps {
}

const Sidebar = (props: SidebarProps) => {
  const history = useHistory();
  const [state, setState] = useState<GlobalState>()
  console.log('[LOG] ~ file: Sidebar.tsx ~ line 14 ~ state', state)

  useEffect(() => {
    const cleanUp = actions.onStateChange((newState) => {
      setState(newState)
    })
    return () => { cleanUp() }
  }, [])

  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const memoItems = useMemo(() => {
    const items: MenuProps['items'] = (state?.children || []).map(item =>
      getItem(item.name, item.name, <div className="i-ant-design:mail-filled" />,
        item.routes.map(route => getItem(route.meta.title, route.path, <div className={route.meta.icon} />))
      ),
    )
    return items
  }, [state])



  const onClick: MenuProps['onClick'] = e => {
    const path = `/${e.keyPath[1]}-sub${e.keyPath[0]}`
    if (e.keyPath) history.push(path)
  };

  return (
    <div className="h-full py-5 flex flex-col">
      <div className="font-bold text-xl flex justify-center">Sigma Streaming</div>
      <Menu
        className="flex-1"
        onClick={onClick}
        style={{ width: 220 }}
        mode="inline"
        defaultActiveFirst
        items={memoItems}
      />
    </div>
  )
}

export default Sidebar
