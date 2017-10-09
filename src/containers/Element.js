import React from "react"
import { getRouteProps, Link } from "react-static"
//

export default getRouteProps(({ content }) => (
  <div>
    <Link to="/components">{"<"} Back</Link>
    <div dangerouslySetInnerHTML={{ __html: contents }} />
  </div>
))
