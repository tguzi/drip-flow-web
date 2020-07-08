import React, { useState } from 'react'
import styled from 'styled-components'

import { throttle } from 'utils/index'
import Editor from './editor'
import View from './view'
// import AnchorNav from './anchorNav'

const Wrap = styled.div`
  width: 100%;
  height: 100%;
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

  // const [anchorList, setAnchorList] = useState<Array<any>>([])

  function setValue(text: any) {
    setVal(text)
  }

  function setAnchorBar(val: any) {
    console.log('val: ', val)
    // setAnchorList(val)
  }

  return (
    <Wrap>
      <EditorBox>
        <Editor
          value={val}
          onChange={throttle(setValue)}
          handleChange={throttle(setValue)}
        />
      </EditorBox>
      <ViewBox>
        <View
          content={val}
          handleAnchorChange={throttle(setAnchorBar)}
        />
      </ViewBox>
      {/* <AnchorNav list={Object.values(anchorList)} /> */}
    </Wrap>
  )
}

export default MarkDownEditor
