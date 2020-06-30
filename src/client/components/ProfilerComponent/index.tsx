import React, { SFC, Profiler } from 'react'

type TProps = {
  id: string;
}

// interface ICB {
//   id: any; // 发生提交的 Profiler 树的 “id”
//   phase: string; //  "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
//   actualDuration: number; // 本次更新 committed 花费的渲染时间
//   baseDuration: number; // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
//   startTime: Date; // 本次更新中 React 开始渲染的时间
//   commitTime: Date; // 本次更新中 React committed 的时间
//   interactions: Array<string|number>; // 属于本次更新的 interactions 的集合
// }
const list = [{
  key: 'id',
  label: '发生提交的'
}, {
  key: 'phase',
  label: '如果组件树刚加载/重渲染'
}, {
  key: 'actualDuration',
  label: '本次更新committed花费的渲染时间'
}, {
  key: 'baseDuration',
  label: '估计不使用memoization的情况下渲染整颗子树需要的时间'
}, {
  key: 'startTime',
  label: '本次更新中React开始渲染的时间'
}, {
  key: 'commitTime',
  label: '本次更新中React committed的时间'
}, {
  key: 'interactions',
  label: '属于本次更新的interactions的集合'
}]

// 渲染回调
function onRenderCallback(...props: any): void {
  props.forEach((v: any, key: number) => {
    console.log(`[Profiler ${list[key].label}]: ${v}`)
  })
  console.log('-----------------------')
}

const ProfilerComponent: SFC<TProps> = ({
  id,
  children
}) => {

  return <Profiler id={id} onRender={onRenderCallback}>{children}</Profiler>
}

ProfilerComponent.defaultProps = {
  id: 'profiler'
}

export default ProfilerComponent
