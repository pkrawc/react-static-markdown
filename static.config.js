import fs from 'fs-extra'
import matter from 'gray-matter'
import path from 'path'
import React, { Component } from 'react'
import remark from 'remark'
import html from 'remark-html'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: async () => {
    const remarkParser = remark().use(html)
    const dirPath = path.resolve(__dirname, './documentation')
    const contentArray = fs.readdirSync(dirPath).map(file => {
      const { data, content } = matter(fs.readFileSync(path.resolve(dirPath, file), 'utf8'))
      const { contents } = remarkParser.processSync(content)
      return { data, contents }
    })
    const routes = [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/docs',
        component: 'src/containers/Docs',
        getProps: () => ({
          data: contentArray.map(({ data }) => data),
        }),
        children: contentArray.map(({ data, contents }) => ({
          path: `${data.path}/`,
          component: 'src/containers/Element',
          getProps: () => ({
            contents,
          }),
        })),
      },
    ]
    return routes
  },
  Html: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children } = this.props

      const sheet = new ServerStyleSheet()
      const newChildren = sheet.collectStyles(children)
      const styleTags = sheet.getStyleElement()

      return (
        <Html>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {styleTags}
          </Head>
          <Body>{newChildren}</Body>
        </Html>
      )
    }
  },
}
