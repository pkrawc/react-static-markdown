/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { getRouteProps, Route, Link, Switch } from "react-static"
// import Element from "./Element"

const Element = getRouteProps(({ match, content }) => (
  <div className="element">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
))

export default getRouteProps(({ match, data }) => (
  <Switch>
    <Route
      path={match.url}
      exact
      render={() => (
        <ul>
          {data.map(component => (
            <li key={Math.random()}>
              <Link to={`/components/element/${component.path}`}>
                {component.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    />
    <Route path={`${match.url}/element/:elementId`} component={Element} />
  </Switch>
))
