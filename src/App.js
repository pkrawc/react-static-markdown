import React from "react"
import { Router, Route, Switch, Redirect, Link } from "react-static"
import styled, { injectGlobal } from "styled-components"

import Home from "./containers/Home"
import Docs from "./containers/Docs"

injectGlobal`
  body {
    font-family: "Open Sans", Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.main``

export default () => (
  <Router>
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Docs} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Wrapper>
  </Router>
)
