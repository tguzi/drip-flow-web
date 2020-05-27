import React from 'react'
import CodeMirror from './codeMirror'

interface IProps {
  value: string,
  onChange: Function,
}

const Editor:React.SFC<IProps> = ({
  value,
  onChange,
}) => (
  <form>
    <CodeMirror
      mode="markdown"
      theme="monokai"
      value={value}
      onChange={onChange}
    />
  </form>
)

Editor.defaultProps = {
  value: '',
  onChange: () => {},
}

export default Editor
