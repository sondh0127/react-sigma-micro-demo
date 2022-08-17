import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { CONTAINER_ID } from "./main";
import NavBar from './NavBar';
import Sidebar from './Sidebar';
import { Button } from 'antd'

function Main() {

  return (
    <>
      <Router >
        <div className="h-full text-white">
          <div className="fixed w-[220px] bg-violet h-[100vh]">
            <Sidebar />
            <Button type="primary">Button</Button>
          </div>

          <div className="pl-[240px] pr-[20px]">
            <div className="h-[45px] bg-blue fixed w-[calc(100%-220px)] ml-[-20px]">
              <NavBar />
            </div>
            <div className="pt-[60px] min-h-[calc(100vh-101px)] bg-gray py-[15px] border-box">
              <div className="relative my-[-15px] min-h-[calc(100vh-45px)] mx-[-20px]">
                {/* Use one container for all app */}
                <div className="absolute inset-0" id={CONTAINER_ID}></div>
                <Switch>
                  <Route path="/sigma/interactive"></Route>
                  {/* <Route path="/sigma/ssai"></Route> */}
                  <Route path="/sigma/lrm"></Route>
                  <Route path="/sigma/transcode"></Route>
                  <Route path="/sigma/library"></Route>
                  <Route path="/about">
                    <div>About</div>
                  </Route>
                  <Route path="/topics">
                    <div>Topics</div>
                  </Route>
                  <Route path="/">
                    <div className="">
                      Home
                    </div>
                  </Route>
                </Switch>
              </div>
            </div>

          </div>
        </div>
      </Router>
    </>
  )
}


export default Main
