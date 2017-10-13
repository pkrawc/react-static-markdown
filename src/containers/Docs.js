import React from 'react'
import { getRouteProps, Link } from 'react-static'

export default getRouteProps(({ data }) => (
  <section>
    <ul>
      {data.map(component => (
        <li key={Math.random()}>
          <Link to={`/docs/${component.path}`}>{component.title}</Link>
        </li>
      ))}
    </ul>
  </section>
))
