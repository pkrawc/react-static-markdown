import React from "react"
import { Link } from "react-static"
//

const Element = props => (
  <div className="element">
    <Link to="/components">back</Link>
    <div dangerouslySetInnerHTML={{ __html: props.contents }} />
  </div>
)

export default Element
