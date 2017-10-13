import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'

import Routes from 'react-static-routes'

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
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Wrapper>
  </Router>
)
