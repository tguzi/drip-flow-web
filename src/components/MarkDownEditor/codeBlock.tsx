// import React, { useEffect, useRef } from 'react'
// import styled from 'styled-components'
// import hljs from 'highlight.js'

// import 'highlight.js/styles/github.css'

// const PreEle = styled.pre``
// const CodeEle = styled.code``

// // const hljs = window.hljs

// interface IProps {
//   value: string,
//   language?: string,
// }

// // 代码块
// const CodeBlock:React.SFC<IProps> = ({
//   value,
//   language,
// })=> {
//   const ref = useRef(null)
//   useEffect(() => {
//     console.log(ref)
//     if (ref) {
//       // hljs.highlightBlock(ref)
//     }
//   })

//   return (
//     <PreEle>
//       <CodeEle ref={ref}>
//         {value}
//       </CodeEle>
//     </PreEle>
//   )
// }

// CodeBlock.defaultProps = {
//   value: '',
//   language: ''
// }

// export default CodeBlock

// import React from 'react'
// import SyntaxHighlighter from 'react-syntax-highlighter'
// import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// class CodeBlock extends React.PureComponent {
//   render() {
//     const { value }: any = this.props
//     return (
//       <SyntaxHighlighter style={tomorrowNightEighties}>
//         {value}
//       </SyntaxHighlighter>
//     )
//   }
// }

// export default CodeBlock

import React, { PureComponent } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// 设置高亮样式
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'
// 设置高亮的语言
import { jsx, javascript } from 'react-syntax-highlighter/dist/esm/languages/prism'

class CodeBlock extends PureComponent {

  static defaultProps = {
    language: null
  }

  componentWillMount() {
    // 注册要高亮的语法，
    // 注意：如果不设置打包后供第三方使用是不起作用的
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('javascript', javascript)
  }

  render() {
    const { language, value }: any = this.props
    return (
      <figure className='highlight'>
        <SyntaxHighlighter language={language} style={coy}>
          {value}
        </SyntaxHighlighter>
      </figure>
    )
  }
}

export default CodeBlock
