declare module '*.css'
declare module '*.png'
declare module '*.svg'
declare module '*.jpg'

declare module 'react-markdown/plugins/html-parser'
declare module 'react-syntax-highlighter/dist/esm/languages/prism'
declare module 'codemirror/*'
declare module '@tgu/*'

interface Window {
  hljs: any,
  CodeMirror: any,
}

declare interface Date {
  format(rule: string): string;
}
