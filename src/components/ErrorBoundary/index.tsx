import React, { Component } from 'react'
import ErrorTemplate from './template'

interface IProps {
  children: any;
}

type IState = Partial<{
  msg: string;
}>

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      msg: '',
    }
  }

  componentDidCatch(error: Error) {
    this.setState({
      msg: error.message,
    })
  }

  render() {
    const { msg } = this.state
    if (msg) {
      // 组件加载出错
      return <ErrorTemplate msg={msg} />
    }
    // 正常页面，渲染子组件
    return this.props.children
  }
}
export default ErrorBoundary
