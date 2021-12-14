import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/editor/interactive-app">Interactive App</Link>
            </li>
            <button onClick={changeToken}> Change Token </button>
          </ul>
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
          <div className="h-full" id="interactive-app"></div>
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
