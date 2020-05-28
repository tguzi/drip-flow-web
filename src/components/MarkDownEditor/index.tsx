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

const MarkDownEditor = () => {

  const [val, setVal] = useState('')

  return (
    <Wrap>
      <Editor
        mode="html"
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
