declare module '*.css';
declare module '*.png';
declare module '*.svg';
declare module '*.jpg';

declare module 'react-markdown/plugins/html-parser';
declare module 'react-syntax-highlighter/dist/esm/languages/prism';

interface Window {
  hljs: any,
  CodeMirror: any,
}
