import React, { useEffect, useRef } from 'react'

const hljs = window.hljs

interface IProps {
  value: string,
  language?: string,
}

// 代码块
const CodeBlock:React.SFC<IProps> = ({
  value,
  language,
})=> {
  const ref = useRef(null)
  useEffect(() => {
    hljs.highlightBlock(ref)
  })

  return (
    <pre>
      <code ref={ref} className={`language-${language}`}>
        {value}
      </code>
    </pre>
  )
}

CodeBlock.defaultProps = {
  value: '',
  language: ''
}

export default CodeBlock
