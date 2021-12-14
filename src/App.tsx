import { useEffect, useState } from 'react'
import logo from './logo.svg'
import {
  Switch,
  Route,
  Link,
  // BrowserRouter as Router,
  HashRouter as Router
} from "react-router-dom";
import { actions } from "./interactive-app";


function Main() {
  function changeToken() {
    actions.updateGlobalState((state) => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiIyOWY2NWUwMC0xZWU1LTQwZjAtYWZhNS0zM2MyODE5ODI4ODMiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjM3NDcyODkyfQ.HQoeTm1khKSurFhgyWnnrRSvoMS0IJ-IVsBln5nCD4A'
      return {
        ...state,
        token,
      }
    })
  }

  return (
    <>
      <Router >
        <div className="h-full">
          <div className="fixed w-[220px] bg-[#ebf1f5] h-[100vh]">
            Sidebar
          </div>

          <div className="pl-[240px] pr-[20px]">
            <div className="h-[45px] bg-blue-200 fixed w-[calc(100%-220px)] ml-[-20px]">
              <div className='flex'>
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/about">About</Link>
                </div>
                <div>
                  <Link to="/topics">Topics</Link>
                </div>
                <div>
                  <Link to="/editor/interactive-app">Interactive App</Link>
                </div>
                <button onClick={changeToken}> Change Token </button>
              </div>
            </div>
            <div className="pt-[60px] min-h-[calc(100vh-101px)] bg-red-200 py-[15px] border-box">
              <div className="relative my-[-15px] min-h-[calc(100vh-45px)] mx-[-20px]">
                <div className="absolute inset-0" id="interactive-app"></div>
                <Switch>
                <Route path="/editor/interactive-app">
                </Route>
                <Route path="/about">
                  <div>About</div>
                </Route>
                <Route path="/topics">
                  <div>Topics</div>
                </Route>
                <Route path="/">
                  <App />
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default Main
