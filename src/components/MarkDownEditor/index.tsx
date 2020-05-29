import React, { useState } from 'react'
import styled from 'styled-components'

import Editor from './editor'
import View from './view'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 1;
`

const EditorBox = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dashed #efefef;
  .CodeMirror {
    width: 100%;
    height: 100%;
  }
`

const ViewBox = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  box-sizing: border-box;
  border: 1px dashed #efefef;
`

const MarkDownEditor = () => {

  const [val, setVal] = useState('')

  return (
    <Wrap>
      <EditorBox>
        <Editor
          value={val}
          onChange={(v: any) => {
            setVal(v)
          }}
          handleChange={(text: string) => {
            setVal(text)
          }}
        />
      </EditorBox>
      <ViewBox>
        <View content={val} />
      </ViewBox>
    </Wrap>
  )
}

export default MarkDownEditor
