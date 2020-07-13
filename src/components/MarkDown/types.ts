import { ReactChildren } from 'react'

export interface IAnyKey {
  [propName: string]: any;
}

export interface IViewProps {
  content: string;
  handleAnchorChange?: Function;
}

export type TEditorProps = Partial<{
  defaultValue: string,
  readOnly: boolean;
  textAreaClassName: string;
  forceTextArea: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleChange: any;
}>

export interface IAnchorList {
  anchor: string;
  title: string;
  level: number;
}

export interface IAnchorProps {
  list: Array<IAnchorList>;
}

export interface IHeadingProps {
  level: number;
  children: any;
  onAnchorChange: Function;
}