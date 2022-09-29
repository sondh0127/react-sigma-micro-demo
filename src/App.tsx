import { Switch, Route, HashRouter as Router } from "react-router-dom";
import NavBar from './NavBar';
import { Button } from 'antd'
import Sidebar from './Sidebar';
import Vite from "./Vite";
import { actions, libraryHost, lrmHost, transcodeHost } from "./main";
import Lrm from "./Lrm";

function Main() {

  function onChange() {
    actions.setState({
      token: 'newToken'
    })
  }
  http://localhost:3003/#/channel/transcode/lrm/channels/ec63ab7d-bda0-4058-9157-78dff20e5db9
  return (
    <>
      <Router >
        <div
          style={{
            width: '100vw',
          }}
          className="flex"
        >
          <div className="h-[100vh] h-screen flex-shrink-0">
            <Sidebar />
            {/* <Button type="primary" onClick={onChange}>Change State Demo</Button> */}
          </div>
          <div style={{
            border: '1px dashed #ccc',
            borderRadius: ' 8px',
            display: 'inline-block',
            height: '100vh',
            overflow: 'scroll',
            width: '100%',
          }}>
            <div className="h-[45px] bg-blue fixed w-[calc(100%-220px)]">
              <NavBar />
            </div>
            <div style={{ height: 45 }}></div>
            <Switch>
              <Route exact path="/library">
                <Vite url={libraryHost} name="library" />
              </Route>
              <Route exact path="/library-sub/:path">
                <Vite url={libraryHost} name="library" />
              </Route>
              <Route exact path="/lrm">
                <Lrm url={lrmHost} name="lrm" />
              </Route>
              <Route exact path="/lrm-sub/:path">
                <Lrm url={lrmHost} name="lrm" />
              </Route>
{/*
              <Route exact path="/transcode-live">
                <Vite url={transcodeHost} name="transcode-live" />
              </Route>
              <Route exact path="/transcode-live-sub/:path">
                <Vite url={transcodeHost} name="transcode-live" />
              </Route> */}
              <Route path="/">
                <div className="">
                  Home
                </div>
              </Route>
            </Switch>
          </div>

        </div>
      </Router>
    </>
  )
}


export default Main
