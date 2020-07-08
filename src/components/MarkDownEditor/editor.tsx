import React, { useEffect, useRef } from 'react'
import { throttle } from 'utils/index'
import { TEditorProps } from './types'

const CodeMirror = window.CodeMirror

const Editor: React.SFC<TEditorProps> = (props) => {
  const editorRef = useRef(null)
  const {
    value,
    onChange,
    textAreaClassName,
    readOnly,
    handleChange,
  } = props

  useEffect(() => {
    // 初始化
    const editor = CodeMirror.fromTextArea(editorRef.current as any, {
      mode: 'markdown',
      theme: 'ayu-mirage',
    })
    editor.on('change', throttle(onEditorChange))
  }, [])

  function onEditorChange(evt: any) {
    const val = evt.getValue()
    handleChange(val)
  }

  return (
    <textarea
      ref={editorRef}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
      className={textAreaClassName}
    />
  )
}

Editor.defaultProps = {
  value: '',
  readOnly: false,
  textAreaClassName: '',
  onChange: () => {},
  handleChange: () => {},
}

export default Editor
