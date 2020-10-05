import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import styled, { createGlobalStyle } from 'styled-components';
import composition from '../scores/dev.js'

// Can use raw-loader to load js file as text

const score = composition.map(note => JSON.stringify(note)).join('\n')

const start = `function add(a, b) {
  return a + b;
}

const ø = () => {}

ø([ note1, note2 ])
`;

/* #1d1f21 */

const Frame = styled.div`
  background: #1d1f21 !important;
	border-radius: 10px;
	height: 60vh;
	overflow: auto;
`;

const Highlighting = createGlobalStyle`
/* https://github.com/PrismJS/prism-themes/blob/master/themes/prism-material-dark.css */

canvas {
  border-radius: 10px;
}

textarea, pre {
  color: #ccc !important;
  caret-color: white !important;
  &:focus {
    outline: none;
  }
}

code[class*="language-"],
pre[class*="language-"] {
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	color: #eee;
	background: #2f2f2f;
	font-family: Roboto Mono, monospace;
	font-size: 1em;
	line-height: 1.5em;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

code[class*="language-"]::-moz-selection,
pre[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection,
pre[class*="language-"] ::-moz-selection {
	background: #363636;
}

code[class*="language-"]::selection,
pre[class*="language-"]::selection,
code[class*="language-"] ::selection,
pre[class*="language-"] ::selection {
	background: #363636;
}

:not(pre) > code[class*="language-"] {
	white-space: normal;
	border-radius: 0.2em;
	padding: 0.1em;
}

pre[class*="language-"] {
	overflow: auto;
	position: relative;
	margin: 0.5em 0;
	padding: 1.25em 1em;
}

.language-css > code,
.language-sass > code,
.language-scss > code {
	color: #fd9170;
}

[class*="language-"] .namespace {
	opacity: 0.7;
}

.token.atrule {
	color: #c792ea;
}

.token.attr-name {
	color: #ffcb6b;
}

.token.attr-value {
	color: #a5e844;
}

.token.attribute {
	color: #a5e844;
}

.token.boolean {
	color: #c792ea;
}

.token.builtin {
	color: #ffcb6b;
}

.token.cdata {
	color: #80cbc4;
}

.token.char {
	color: #80cbc4;
}

.token.class {
	color: #ffcb6b;
}

.token.class-name {
	color: #f2ff00;
}

.token.comment {
	color: #616161;
}

.token.constant {
	color: #c792ea;
}

.token.deleted {
	color: #ff6666;
}

.token.doctype {
	color: #616161;
}

.token.entity {
	color: #ff6666;
}

.token.function {
	color: #c792ea;
}

.token.hexcode {
	color: #f2ff00;
}

.token.id {
	color: #c792ea;
	font-weight: bold;
}

.token.important {
	color: #c792ea;
	font-weight: bold;
}

.token.inserted {
	color: #80cbc4;
}

.token.keyword {
	color: #c792ea;
}

.token.number {
	color: #fd9170;
}

.token.operator {
	color: #89ddff;
}

.token.prolog {
	color: #616161;
}

.token.property {
	color: #80cbc4;
}

.token.pseudo-class {
	color: #a5e844;
}

.token.pseudo-element {
	color: #a5e844;
}

.token.punctuation {
	color: #89ddff;
}

.token.regex {
	color: #f2ff00;
}

.token.selector {
	color: #ff6666;
}

.token.string {
	color: #a5e844;
}

.token.symbol {
	color: #c792ea;
}

.token.tag {
	color: #ff6666;
}

.token.unit {
	color: #fd9170;
}

.token.url {
	color: #ff6666;
}

.token.variable {
	color: #ff6666;
}
`;
 
export default () => {
  const [ code, setCode ] = useState(score);

  return (
    <Frame>
      <Highlighting />
      <Editor
        value={code}
        onValueChange={value => setCode(value)}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    </Frame>
  );
};
