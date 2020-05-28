import React, { useEffect } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// 设置高亮样式
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
// 设置高亮的语言
import { jsx, javascript } from 'react-syntax-highlighter/dist/esm/languages/prism'

interface IProps {
  value: string
}

const CodeBlock: React.SFC<IProps> = ({
  value
}) => {

  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('javascript', javascript)
  }, [])

  return (
    <figure className='highlight'>
      <SyntaxHighlighter style={coy}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
}

export default CodeBlock
