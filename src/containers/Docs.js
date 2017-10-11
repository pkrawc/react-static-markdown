import React from "react"
import { getRouteProps, Route, Link, Switch } from "react-static"
import Element from "./Element"

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
