import React, { useRef, useState, useEffect } from 'react'
// import CodeMirror from 'codemirror'
// 基础样式
// import 'codemirror/lib/codemirror.css'
// 语言类型
// import 'codemirror/mode/markdown/markdown'
// 主题
// import 'codemirror/theme/monokai.css'

const CodeMirror = window.CodeMirror

type IPProps = Partial<{
  readOnly: boolean,
  textAreaClassName: string,
  forceTextArea: string,
  value: any,
  onChange: any,
}>

interface IProps extends IPProps {
  mode: string,
  theme: string
}

const CodeMirrorEditor:React.SFC<IProps> = (props) => {

  const {
    value,
    onChange,
    readOnly,
    textAreaClassName,
    forceTextArea,
  } = props

  const editorRef = useRef(null)

  let editor: any = null

  const [val, setVal] = useState(value)

  const editorEl = React.createElement('textarea', {
    ref: editorRef,
    value: val,
    onChange: onChange,
    readOnly: readOnly,
    className: textAreaClassName,
  })

  useEffect(() => {
    if (!forceTextArea) {
      // CodeMirror
      editor = CodeMirror.fromTextArea(editorRef.current as any, props)
      editor.on('change', handleChange)
    }
  }, [])

  // 编辑器的值变化
  function handleChange () {
    if (!editor) {
      return
    }
    // 编辑器内容
    const editorVal = editor.getValue()
    setVal(editorVal)
    onChange(editorVal)
  }

  return React.createElement('div', null, editorEl)
}

CodeMirrorEditor.defaultProps = {
  value: '',
  readOnly: false,
  onChange: () => {},
  textAreaClassName: '',
}

export default CodeMirrorEditor
