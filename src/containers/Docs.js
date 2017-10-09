/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { getRouteProps, Route, Link } from "react-static"
// import Element from "./Element"

const Element = getRouteProps(({ match, content }) => (
  <div className="element">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
))

export default getRouteProps(({ match, data }) => (
  <div>
    {data.map(component => (
      <li key={Math.random()}>
        <Link to={`/components/${component.path}`}>{component.title}</Link>
      </li>
    ))}
    <div className="elements">
      <Route
        path={`${match.url}/components/:componentID`}
        component={Element}
      />
    </div>
  </div>
))
