import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

const Element = getRouteProps(({ contents }) => (
  <div className="element">
    <Link to="/docs">Go back</Link>
    <div dangerouslySetInnerHTML={{ __html: contents }} />
  </div>
))

export default Element
