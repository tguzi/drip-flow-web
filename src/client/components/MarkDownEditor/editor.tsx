import React, { useEffect, useRef } from 'react'
import CodeMirror from 'codemirror'
// 语言类型
import 'codemirror/mode/markdown/markdown'
// 快捷键
import 'codemirror/keymap/sublime.js'
// 主题样式
// import 'codemirror/theme/ayu-mirage.css'
// 主要样式
// import 'codemirror/lib/codemirror.css'
// const CodeMirror = window.CodeMirror

type TProps = Partial<{
  readOnly: boolean,
  textAreaClassName: string,
  forceTextArea: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  handleChange: any,
}>

const Editor:React.SFC<TProps> = (props) => {

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
      // keyMap: 'sumbit',
      // lineNumbers: true
    })
    editor.on('change', (evt: any) => {
      const val = evt.getValue()
      handleChange(val)
    })

  }, [])

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
