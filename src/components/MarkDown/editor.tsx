import React, { useEffect, useRef, useState } from 'react'
import { throttle } from '@tgu/utils'
import { TEditorProps } from './types'

const CodeMirror = window.CodeMirror

const Editor: React.SFC<TEditorProps> = ({
  defaultValue,
  textAreaClassName,
  readOnly,
  handleChange
}) => {
  const editorRef = useRef(null)
  const [editor, setEditor] = useState<any>(null)

  useEffect(() => {
    // 初始化
    const editor = CodeMirror.fromTextArea(editorRef.current as any, {
      mode: 'markdown',
      theme: 'mdn-like',
    })
    // 监听输入变化
    editor.on('change', throttle(onEditorChange))
    // 设置编辑器
    setEditor(editor)
  }, [])

  useEffect(() => {
    // 设置默认值
    if (editor) {
      editor?.setValue(defaultValue)
    }
  }, [defaultValue])

  function onEditorChange(evt: any) {
    const val = evt.getValue()
    handleChange(val)
  }

  return (
    <textarea
      ref={editorRef}
      readOnly={readOnly}
      className={textAreaClassName}
    />
  )
}

Editor.defaultProps = {
  defaultValue: '',
  readOnly: false,
  textAreaClassName: '',
  onChange: () => {},
  handleChange: () => {},
}

export default Editor
