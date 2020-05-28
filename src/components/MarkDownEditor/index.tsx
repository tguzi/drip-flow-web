import React, { useState } from 'react'
import styled from 'styled-components'

import Editor from './editor'
import View from './view'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  >div {
    width: 50%;
    height: 100%;
  }
  .CodeMirror {
    width: 100%;
    height: 100%;
  }
`

const str = `

# Live demo

Changes are automatically rendered as you type.

## Table of Contents

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)

`

const MarkDownEditor = () => {

  const [val, setVal] = useState(str)

  return (
    <Wrap>
      <Editor
        mode="markdown"
        theme="monokai"
        value={val}
        onChange={(v: any) => {
          setVal(v)
        }}
      />
      <div>
        <View content={val} />
      </div>
    </Wrap>
  )
}

export default MarkDownEditor
