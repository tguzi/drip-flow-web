import styled from 'styled-components'

export const ViewWrap = styled.article`
  height: 100%;
  padding: 1em 2em 3em;
	font-size: 15px;
	line-height: 1.7;
	word-break: break-word;
  overflow-x: hidden;
  background: #fff;
  &::-webkit-scrollbar {
	  display: none;
  }
  h1,h2,h3,h4,h5,h6{
    color: #111;
    margin: 0.5em 0;
  }
  h4,h5,h6{ font-weight: bold; }
  h1{ font-size: 2.5em; }
  h2{ font-size: 2em; }
  h3{ font-size: 1.5em; }
  h4{ font-size: 1.2em; }
  h5{ font-size: 1em; }
  h6{ font-size: 0.9em; }
  p {
    margin: 1em 0;
  }
  img, video {
    max-width: 100%;
	  max-height: 668px;
  }
  figure {
    margin: 2em auto;
    text-align: center;
  }
  figure figcaption {
    text-align: center;
    font-size: .8em;
    line-height: 2em;
    color: #909090;
  }
  pre {
    line-height: 1.45em;
    code {
      font-size: .8em;
      padding: .5em 1em;
      margin: 0;
      word-break: normal;
      display: block;
      color: #333;
    }
  }
  code {
    font-size: .8em;
    padding: .2em .4em;
    word-break: break-word;
    color: #4e5980;
    background-color: #f8f8f8;
    border-radius: 2px;
  }
  a {
    color: #259;
    &:active, &:hover {
      color: #275b8c;
    }
  }
  blockquote {
    margin: 1em 0;
    border-left: 4px solid #ddd;
    padding: 0 1em;
    color: #666;
    p {
      margin: .5em 0;
    }
  }
  ol, ul {
    padding-left: 2em;
    li {
      margin-bottom: .5em;
    }
    ol, ul {
      margin-top: .2em;
      list-style: lower-alpha;
    }
  }
  ol {
    list-style: decimal;
  }
  ul {
    list-style: square;
  }
  table {
    font-size: .8em;
    max-width: 100%;
    overflow: auto;
    border: 1px solid #f6f6f6;
    border-collapse: collapse;
    border-spacing: 0;
    thead {
      background: #f6f6f6;
      color: #000;
      text-align: left;
    }
    tr:nth-child(2n) {
      background-color: #fcfcfc;
    }
    td, th {
      padding: .8em .5em;
	    line-height: 1.5em;
    }
    td: {
      min-width: 7.5em;
    }
  }
`
