import React, { Component } from "react"
import remark from "remark"
import renderer from "remark-react"
import matter from "gray-matter"

class Remark extends Component {
  state = {
    contents: null
  }

  parser = remark().use(renderer)

  async componentDidMount() {
    const array = this.props.data.map(file => {
      const { data, content } = matter(file)
      const { contents } = this.parser.processSync(content)
      return { children: contents, data: data }
    })
    this.setState({ contents: array })
  }
  render = _ => {
    return this.props.children(this.state.contents)
  }
}

export default Remark
