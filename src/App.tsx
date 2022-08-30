import { Switch, Route, HashRouter as Router } from "react-router-dom";
import NavBar from './NavBar';
import { Button } from 'antd'
import Sidebar from './Sidebar';
import Vite from "./Vite";
import { actions } from "./main";

function Main() {

  function onChange() {
    actions.setState({
      token: 'newToken'
    })
  }

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
            <Button type="primary" onClick={onChange}>Change State Demo</Button>
          </div>
          <div style={{
            border: '1px dashed #ccc',
            borderRadius: ' 8px',
            display: 'inline-block',
            height: '45%',
            margin: '20px',
            overflow: 'scroll',
            width: '100%',
          }}>
            {/* <div className="h-[45px] bg-blue fixed w-[calc(100%-220px)] ml-[-20px]">
              <NavBar />
            </div> */}
            {/* <div style={{ height: 45 }}></div> */}
            <Switch>
              <Route exact path="/library"> <Vite url="//localhost:4300/" name="library" /> </Route>
              <Route exact path="/library-sub/:path"> <Vite url="//localhost:4300/" name="library" /> </Route>
              {/* <Route exact path="/vite-sub/:path"> <Vite /> </Route> */}
              {/* <Route path="/sigma/lrm"></Route> */}
              {/* <Route path="/sigma/transcode"></Route> */}
              {/* <Route path="/sigma/library"></Route>\ */}
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
