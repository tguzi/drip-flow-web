import React, { useState } from 'react'

import Editor from './editor'
import View from './view'

const MarkDownEditor = () => {

  const [val, setVal] = useState('')

  return (
    <div>
      <Editor
        value={val}
        onChange={(v: any) => {
          console.log('内容： ', v)
          setVal(v)
        }}
      />
      <br />
      <hr />
      <View
        content={val}
      />
    </div>
  )
}

export default MarkDownEditor
