/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { getRouteProps, Route, Link, Switch } from "react-static"
// import Element from "./Element"

const Element = getRouteProps(({ match, contents }) => (
  <div className="element">
    <div dangerouslySetInnerHTML={{ __html: contents }} />
  </div>
))

export default getRouteProps(({ match, data }) => (
  <section>
    <ul>
      {data.map(component => (
        <li key={Math.random()}>
          <Link to={`/components/${component.path}`}>{component.title}</Link>
        </li>
      ))}
    </ul>
    <Route path={`${match.url}/:elementId`} component={Element} />
  </section>
))
