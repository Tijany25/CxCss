const fs = require('fs');
const path = require('path');

const colorsDefault = require('../colors.default');
const sizesDefault = require('../sizes.default');

const loopEnd = 200;
const loopStart = 0;

let classes = {};

for (let i = loopEnd; i >= loopStart; i--) {
  classes[`mt-${i}`] = `.mt-${i} { margin-top: ${i}px; }`;
  classes[`mb-${i}`] = `.mb-${i} { margin-bottom: ${i}px; }`;
  classes[`ml-${i}`] = `.ml-${i} { margin-left: ${i}px; }`;
  classes[`mr-${i}`] = `.mr-${i} { margin-right: ${i}px; }`;
  classes[`mx-${i}`] = `.mx-${i} { margin-left: ${i}px; margin-right: ${i}px; }`;
  classes[`my-${i}`] = `.my-${i} { margin-top: ${i}px; margin-bottom: ${i}px; }`;
  classes[`m-${i}`] = `.m-${i} { margin: ${i}px; }`;
  classes[`p-${i}`] = `.p-${i} { padding: ${i}px; }`;
  classes[`pt-${i}`] = `.pt-${i} { padding-top: ${i}px; }`;
  classes[`pb-${i}`] = `.pb-${i} { padding-bottom: ${i}px; }`;
  classes[`pl-${i}`] = `.pl-${i} { padding-left: ${i}px; }`;
  classes[`pr-${i}`] = `.pr-${i} { padding-right: ${i}px; }`;
  classes[`px-${i}`] = `.px-${i} { padding-left: ${i}px; padding-right: ${i}px; }`;
  classes[`py-${i}`] = `.py-${i} { padding-top: ${i}px; padding-bottom: ${i}px; }`;
  classes[`w-${i}`] = `.w-${i} { width: ${i}px; }`;
  classes[`w-${i + loopEnd}`] = `.w-${i + loopEnd} { width: ${i + loopEnd}px; }`;
  classes[`w-${i + loopEnd + loopEnd}`] = `.w-${i + loopEnd + loopEnd} { width: ${i + loopEnd + loopEnd}px; }`;
  classes[`w-${i}p`] = `.w-${i}p { width: ${i}%; }`;
  classes[`max-w-${i}p`] = `.max-w-${i}p { max-width: ${i}%; }`;
  classes[`min-w-${i}`] = `.min-w-${i} { min-width: ${i}px; }`;
  classes[`min-w-${i + loopEnd}`] = `.min-w-${i + loopEnd} { min-width: ${i + loopEnd}px; }`;
  classes[`min-w-${i + loopEnd + loopEnd}`] = `.min-w-${i + loopEnd + loopEnd} { min-width: ${i + loopEnd + loopEnd}px; }`;
  classes[`min-w-${i}p`] = `.min-w-${i}p { min-width: ${i}%; }`;
  classes[`h-${i}`] = `.h-${i} { height: ${i}px; }`;
  classes[`h-${i}p`] = `.h-${i}p { height: ${i}%; }`;
  classes[`t-${i}`] = `.t-${i} { top: ${i}px; }`;
  classes[`t-${i}p`] = `.t-${i}p { top: ${i}%; }`;
  classes[`b-${i}`] = `.b-${i} { bottom: ${i}px; }`;
  classes[`b-${i}p`] = `.b-${i}p { bottom: ${i}%; }`;
  classes[`l-${i}`] = `.l-${i} { left: ${i}px; }`;
  classes[`l-${i}p`] = `.l-${i}p { left: ${i}%; }`;
  classes[`r-${i}`] = `.r-${i} { right: ${i}px; }`;
  classes[`r-${i}p`] = `.r-${i}p { right: ${i}%; }`;
  classes[`z-index-${i}`] = `.z-index-${i}, .z-${i} { z-index: ${i}; }`;
  classes[`z-${i}`] = `.z-index-${i}, .z-${i} { z-index: ${i}; }`;
  classes[`z-index--${i}`] = `.z-index--${i}, .z--${i} { z-index: -${i}; }`;
  classes[`z--${i}`] = `.z-index--${i}, .z--${i} { z-index: -${i}; }`;
  classes[`grid-${i}-cols-auto`] = `.grid-${i}-cols-auto { grid-template-columns: repeat(${i}, auto); }`;
  classes[`grid-${i}-cols-1fr`] = `.grid-${i}-cols-1fr { grid-template-columns: repeat(${i}, 1fr); }`;
  classes[`grid-${i}-rows-auto`] = `.grid-${i}-rows-auto { grid-template-rows: repeat(${i}, auto); }`;
  classes[`grid-${i}-rows-1fr`] = `.grid-${i}-rows-1fr { grid-template-rows: repeat(${i}, 1fr); }`;

  classes[`grid-col-span-${i}`] = `.grid-col-span-${i} { grid-column: span ${i}; }`;
  classes[`grid-row-span-${i}`] = `.grid-row-span-${i} { grid-row: span ${i}; }`;
  // classes[`col-span-${i}`] = `.col-span-${i} { grid-column: span ${i}; }`;
  // classes[`row-span-${i}`] = `.row-span-${i} { grid-row: span ${i}; }`;
  classes[`gap-${i}`] = `.gap-${i} { gap: ${i}px; }`;
  // classes[`border-radius-${i}`] = `.border-radius-${i}, .b-radius-${i}, .radius-${i} { border-radius: ${i}px; }`;
  // classes[`border-b-r-${i}`] = `.border-b-r-${i} { border-bottom-right-radius: ${i}px; }`;
  // classes[`border-b-l-${i}`] = `.border-b-l-${i} { border-bottom-left-radius: ${i}px; }`;
  // classes[`radius-${i}`] = `.radius-${i} { border-radius: ${i}px; }`;
  // classes[`border-${i}`] = `.border-${i} { border: ${i}px solid; }`;
  // classes[`border-t-${i}`] = `.border-t-${i} { border-top: ${i}px solid; }`;
  // classes[`border-b-${i}`] = `.border-b-${i} { border-bottom: ${i}px solid; }`;
  // classes[`border-l-${i}`] = `.border-l-${i} { border-left: ${i}px solid; }`;
  // classes[`border-r-${i}`] = `.border-r-${i} { border-right: ${i}px solid; }`;
  // classes[`border-dash`] = `.border-dash { border-style: dashed; }`;
  classes[`line-height-${i}`] = `.line-height-${i} { line-height: ${i}px; }`;
  classes[`rotate-x-${i}`] = `.rotate-x-${i} { transform: rotateX(${i}deg); }`;
  classes[`rotate-x--${i}`] = `.rotate-x--${i} { transform: rotateX(-${i}deg); }`;
  classes[`rotate-y-${i}`] = `.rotate-y-${i} { transform: rotateY(${i}deg); }`;
  classes[`rotate-y--${i}`] = `.rotate-y--${i} { transform: rotateY(-${i}deg); }`;
  classes[`rotate-z-${i}`] = `.rotate-z-${i} { transform: rotateZ(${i}deg); }`;
  classes[`rotate-z--${i}`] = `.rotate-z--${i} { transform: rotateZ(-${i}deg); }`;
  classes[`skew-x-${i}`] = `.skew-x-${i} { transform: skewX(${i}deg); }`;
  classes[`skew-x--${i}`] = `.skew-x--${i} { transform: skewX(-${i}deg); }`;
  classes[`skew-y-${i}`] = `.skew-y-${i} { transform: skewY(${i}deg); }`;
  classes[`skew-y--${i}`] = `.skew-y--${i} { transform: skewY(-${i}deg); }`;
  classes[`scale-x-${i}`] = `.scale-x-${i} { transform: scaleX(${i / 10}); }`;
  classes[`scale-x--${i}`] = `.scale-x--${i} { transform: scaleX(-${i / 10}); }`;
  classes[`scale-y-${i}`] = `.scale-y-${i} { transform: scaleY(${i / 10}); }`;
  classes[`scale-y--${i}`] = `.scale-y--${i} { transform: scaleY(-${i / 10}); }`;
  classes[`t-scale-${i}`] = `.scale-${i} { transform: scale(${i / 10}); }`;
  classes[`scale--${i}`] = `.scale--${i} { transform: scale(-${i / 10}); }`;
  classes[`translate-x-${i}px`] = `.translate-x-${i}px { transform: translateX(${i}px); }`;
  classes[`translate-x--${i}px`] = `.translate-x--${i}px { transform: translateX(-${i}px); }`;
  classes[`translate-y-${i}px`] = `.translate-y-${i}px { transform: translateY(${i}px); }`;
  classes[`translate-y--${i}px`] = `.translate-y--${i}px { transform: translateY(-${i}px); }`;
  classes[`translate-${i}px`] = `.translate-${i}px { transform: translate(${i}px); }`;
  classes[`translate--${i}px`] = `.translate--${i}px { transform: translate(-${i}px); }`;
  classes[`opacity-${i}`] = `.opacity-${i} { opacity: ${i}%; }`;

  /** {{breakpoint_end}} **/
}

for (let i = 0; i <= 800; i++) {
  /** {{breakpoint_start}} **/
  classes[`h-${i}vh`] = `.h-${i}vh { height: ${i}vh; }`;
  classes[`max-h-${i}vh`] = `.max-h-${i}vh { max-height: ${i}vh; }`;
  classes[`min-h-${i}vh`] = `.min-h-${i}vh { min-height: ${i}vh; }`;
  classes[`max-w-${i}`] = `.max-w-${i} { max-width: ${i}px; }`;
  classes[`text-${i}`] = `.text-${i} { font-size: ${i}px; }`;
  /** {{breakpoint_end}} **/
}

/** {{breakpoint_start}} **/

for (let i = 1; i <= 9; i++) {
  const value = i * 100;
  classes[`weight-${value}`] = `.weight-${value} { font-weight: ${value}; }`;
}


/* {{breakpoint_start}} */
classes = {
  ...classes,
  'w-fit': `.w-fit {
    width: fit-content;
  }`,
  'h-fit': `.h-fit {
    height: fit-content;
  }`,
  'absolute': `.absolute {
    position: absolute;
  }`,
  'relative': `.relative {
    position: relative;
  }`,
  'fixed': `.fixed {
    position: fixed;
  }`,
  'static': `.static {
    position: static;
  }`,
  'sticky': `.sticky {
    position: sticky;
  }`,
  'mx-auto': `.mx-auto {
    margin-left: auto;
    margin-right: auto;
  }`,
  'border-none': `.border-none {
    border: none;
  }`,
  bold: `.bold {
    font-weight: bold;
  }`,
  bolder: `.bolder {
    font-weight: bolder;
  }`,
  light: `.light {
    font-weight: light;
  }`,
  lighter: `.lighter {
    font-weight: lighter;
  }`,
  'text-right': `.text-right {
    text-align: right;
  }`,
  'text-center': `.text-center {
    text-align: center;
  }`,
  'text-left': `.text-left {
    text-align: left;
  }`,
  pointer: `.pointer {
    cursor: pointer;
  }`,
  'text-largest': `.text-largest {
    font-size: ${sizesDefault.largest};
  }`,
  'text-larger': `.text-larger {
    font-size: ${sizesDefault.larger};
  }`,
  'text-large': `.text-large {
    font-size: ${sizesDefault.large};
  }`,
  'text-medium': `.text-medium {
    font-size: ${sizesDefault.medium};
  }`,
  'text-small': `.text-small {
    font-size: ${sizesDefault.small};
  }`,
  'text-smaller': `.text-smaller {
    font-size: ${sizesDefault.smaller};
  }`,
  'block': `.block {
    display: block;
  }`,
  'inline-block': `.inline-block {
    display: inline-block;
  }`,
  'inline': `.inline {
    display: inline;
  }`,
  'hidden': `.hidden {
    display: none;
  }`,
  'grid': `.grid {
    display: grid;
  }`,
  'flex': `.flex {
    display: flex;
  }`,
  'inline-flex': `.inline-flex {
    display: inline-flex;
  }`,
  'flex-col': `.flex-col {
    flex-direction: column;
  }`,
  'flex-row': `.flex-row {
    flex-direction: row;
  }`,
  'float-right': `.float-right {
    float: right;
  }`,
  'float-left': `.float-left {
    float: left;
  }`,
  'space-between': `.space-between {
    justify-content: space-between;
  }`,
  'j-content-between': `.j-content-between {
    justify-content: space-between;
  }`,
  'j-content-center': `.j-content-center {
    justify-content: center;
  }`,
  'items-center': `.items-center {
    align-items: center;
  }`,
  'a-items-center': `.a-items-center {
    align-items: center;
  }`,
  'a-items-baseline': `.a-items-baseline {
    align-items: baseline;
  }`,
  'a-items-start': `.a-items-start {
    align-items: flex-start;
  }`,
  'content-end': `.content-end {
    justify-content: flex-end;
    align-content: flex-end;
  }`,
  'overflow-hidden': `.overflow-hidden {
    overflow: hidden;
  }`,
  'scroll-y': `.scroll-y {
    overflow-y: scroll;
  }`,
  'scroll-x': `.scroll-x {
    overflow-x: scroll;
  }`,
  'no-scrollbar': `.no-scrollbar::-webkit-scrollbar {
     width: 0px; 
     height: 0px;
     display: none;
  }`,
  'bg-success': `.bg-success {
    background-color: ${colorsDefault.success};
  }`,
  'bg-danger': `.bg-danger {
    background-color: ${colorsDefault.danger};
  }`,
  'text-danger': `.text-danger {
    color: ${colorsDefault.danger};
  }`,
  'bg-warning': `.bg-warning {
    background-color: ${colorsDefault.warning};
  }`,
  'bg-info': `.bg-info {
    background-color: ${colorsDefault.info};
  }`,
  'bg-none': `.bg-none {
    background-color: initial;
  }`,
  uppercase: `.uppercase {
    text-transform: uppercase;
  }`,
  lowercase: `.lowercase {
    text-transform: lowercase;
  }`,
  capitalize: `.capitalize {
    text-transform: capitalize;
  }`,
  'sentence-case': `.sentence-case {
    text-transform: lowercase;
  }
  .sentence-case:first-letter {
    text-transform: uppercase;
  }`,
  'whitespace-nowrap': `.whitespace-nowrap {
    white-space: nowrap;
  }`,
  'object-fit': `.object-fit {
    object-fit: cover;
  }`,
  round: `.round {
    border-radius: 50%;
  }`,
  'box-shadow': `.box-shadow {
    box-shadow: 0px 6px 12px rgba(4, 9, 33, 0.08);
  }`,
  'w-full': `.w-full {
    width: 100%;
  }`,
  'h-full': `.h-full {
    height: 100%;
  }`,

  'border': `@layer base {
    .border { 
      border: 1px solid; 
    }
  }`,
  'border-r': `@layer base {
    .border-r { 
      border-right: 1px solid; 
    }
  }`,
  'border-l': `@layer base {
    .border-l { 
      border-left: 1px solid; 
    }
  }`,
  'border-t': `@layer base {
    .border-t { 
      border-top: 1px solid; 
    }
  }`,
  'border-b': `@layer base {
    .border-b { 
      border-bottom: 1px solid; 
    }
  }`,
  'border-x': `@layer base {
    .border-x { 
      border-left: 1px solid; 
      border-right: 1px solid; 
    }
  }`,
  'border-y': `@layer base {
    .border-y { 
      border-bottom: 1px solid; 
      border-top: 1px solid;
    }
  }`,
  'border-dashed': '.border-dashed { border-style: dashed; }',
  'border-dotted': '.border-dotted { border-style: dotted; }',
  'border-double': '.border-double { border-style: double; }',
  'border-none': '.border-none { border-style: none; }',
  'border-solid': '.border-solid { border-style: solid; }',
  'border-inset': '.border-inset { border-style: inset; }',
  'border-outset': '.border-outset { border-style: outset; }',
  'border-hidden': '.border-hidden { border-style: hidden; }',
  'border-ridge': '.border-ridge { border-style: ridge; }',
  'border-groove': '.border-groove { border-style: groove; }',

  'outline-none': `.outline-none {
    outline: none;
  }`,  
  'outline': '.outline { outline: 1px solid; }',
  'outline-dotted': '.outline-dotted { outline-style: dotted; }',
  'outline-dashed': '.outline-dashed { outline-style: dashed; }',
  'outline-double': '.outline-double { outline-style: double; }',
  'outline-solid': '.outline-solid { outline-style: solid; }',
  'outline-inset': '.outline-inset { outline-style: inset; }',
  'outline-outset': '.outline-outset { outline-style: outset; }',
  'outline-ridge': '.outline-ridge { outline-style: ridge; }',
  'outline-groove': '.outline-groove { outline-style: groove; }',


  'a-content-initial': '.a-content-initial { align-content: initial; }',
  'a-content-inherit': '.a-content-inherit { align-content: inherit; }',
  'a-items-initial': '.a-items-initial { align-items: initial; }',
  'a-items-inherit': '.a-items-inherit { align-items: inherit; }',
  'a-self-initial': '.a-self-initial { align-self: initial; }',
  'a-self-inherit': '.a-self-inherit { align-self: inherit; }',
  'a-content-center': '.a-content-center { align-content: center; }',
  'a-content-flex-start': '.a-content-flex-start { align-content: flex-start; }',
  'a-content-flex-end': '.a-content-flex-end { align-content: flex-end; }',
  'a-content-stretch': '.a-content-stretch { align-content: stretch; }',
  'a-content-between': '.a-content-between { align-content: space-between; }',
  'a-content-around': '.a-content-around { align-content: space-around; }',
  'a-content-evenly': '.a-content-evenly { align-content: space-evenly; }',
  'a-items-start': '.a-items-start { align-items: flex-start; }',
  'a-items-end': '.a-items-end { align-items: flex-end; }',
  'a-items-center': '.a-items-center { align-items: center; }',
  'a-items-baseline': '.a-items-baseline { align-items: baseline; }',
  'a-items-stretch': '.a-items-stretch { align-items: stretch; }',
  'a-self-auto': '.a-self-auto { align-self: auto; }',
  'a-self-start': '.a-self-start { align-self: flex-start; }',
  'a-self-end': '.a-self-end { align-self: flex-end; }',
  'a-self-center': '.a-self-center { align-self: center; }',
  'a-self-baseline': '.a-self-baseline { align-self: baseline; }',
  'a-self-stretch': '.a-self-stretch { align-self: stretch; }',

  'j-content-initial': '.j-content-initial { justify-content: initial; }',
  'j-content-inherit': '.j-content-inherit { justify-content: inherit; }',
  'j-items-initial': '.j-items-initial { justify-items: initial; }',
  'j-items-inherit': '.j-items-inherit { justify-items: inherit; }',
  'j-self-initial': '.j-self-initial { justify-self: initial; }',
  'j-self-inherit': '.j-self-inherit { justify-self: inherit; }',
  'j-content-start': '.j-content-start { justify-content: flex-start; }',
  'j-content-end': '.j-content-end { justify-content: flex-end; }',
  'j-content-center': '.j-content-center { justify-content: center; }',
  'j-content-between': '.j-content-between { justify-content: space-between; }',
  'j-content-around': '.j-content-around { justify-content: space-around; }',
  'j-content-evenly': '.j-content-evenly { justify-content: space-evenly; }',
  'j-items-start': '.j-items-start { justify-items: flex-start; }',
  'j-items-end': '.j-items-end { justify-items: flex-end; }',
  'j-items-center': '.j-items-center { justify-items: center; }',
  'j-items-baseline': '.j-items-baseline { justify-items: baseline; }',
  'j-items-stretch': '.j-items-stretch { justify-items: stretch; }',
  'j-self-auto': '.j-self-auto { justify-self: auto; }',
  'j-self-start': '.j-self-start { justify-self: flex-start; }',
  'j-self-end': '.j-self-end { justify-self: flex-end; }',
  'j-self-center': '.j-self-center { justify-self: center; }',
  'j-self-baseline': '.j-self-baseline { justify-self: baseline; }',
  'j-self-stretch': '.j-self-stretch { justify-self: stretch; }',

  'all-initial': '.all-initial { all: initial; }',
  'all-inherit': '.all-inherit { all: inherit; }',
  'all-unset': '.all-unset { all: unset; }',
  'all-revert': '.all-revert { all: revert; }',
  'all-auto': '.all-auto { all: auto; }',
  'all-unset': '.all-unset { all: unset; }',
  'all-inherit': '.all-inherit { all: inherit; }',
  'all-revert': '.all-revert { all: revert; }',
  'all-none': '.all-none { all: none; }',


  'backface-visible': '.backface-visible { backface-visibility: visible; }',
  'backface-hidden': '.backface-hidden { backface-visibility: hidden; }',
  'backface-initial': '.backface-initial { backface-visibility: initial; }',
  'backface-inherit': '.backface-inherit { backface-visibility: inherit; }',


  'border-block-none': '.border-block-none { border-block-style: none; }',
  'border-block-solid': '.border-block-solid { border-block-style: solid; }',
  'border-block-double': '.border-block-double { border-block-style: double; }',
  'border-block-dotted': '.border-block-dotted { border-block-style: dotted; }',
  'border-block-dashed': '.border-block-dashed { border-block-style: dashed; }',

  'border-collapse-separate': '.border-collapse-separate { border-collapse: separate; }',
  'border-collapse-collapse': '.border-collapse-collapse { border-collapse: collapse; }',
  'border-collapse-initial': '.border-collapse-initial { border-collapse: initial; }',
  'border-collapse-inherit': '.border-collapse-inherit { border-collapse: inherit; }',

  // 'radius-yy-initial': '.radius-yy-initial { border-end-end-radius: initial; }',
  // 'radius-yy-inherit': '.radius-yy-inherit { border-end-end-radius: inherit; }',

  'cursor-alias': '.cursor-alias { cursor: alias; }',
  'cursor-all-scroll': '.cursor-all-scroll { cursor: all-scroll; }',
  'cursor-auto': '.cursor-auto { cursor: auto; }',
  'cursor-cell': '.cursor-cell { cursor: cell; }',
  'cursor-col-resize': '.cursor-col-resize { cursor: col-resize; }',
  'cursor-context-menu': '.cursor-context-menu { cursor: context-menu; }',
  'cursor-copy': '.cursor-copy { cursor: copy; }',
  'cursor-crosshair': '.cursor-crosshair { cursor: crosshair; }',
  'cursor-default': '.cursor-default { cursor: default; }',
  'cursor-e-resize': '.cursor-e-resize { cursor: e-resize; }',
  'cursor-ew-resize': '.cursor-ew-resize { cursor: ew-resize; }',
  'cursor-grab': '.cursor-grab { cursor: grab; }',
  'cursor-grabbing': '.cursor-grabbing { cursor: grabbing; }',
  'cursor-help': '.cursor-help { cursor: help; }',
  'cursor-move': '.cursor-move { cursor: move; }',
  'cursor-n-resize': '.cursor-n-resize { cursor: n-resize; }',
  'cursor-ne-resize': '.cursor-ne-resize { cursor: ne-resize; }',
  'cursor-nesw-resize': '.cursor-nesw-resize { cursor: nesw-resize; }',
  'cursor-ns-resize': '.cursor-ns-resize { cursor: ns-resize; }',
  'cursor-nw-resize': '.cursor-nw-resize { cursor: nw-resize; }',
  'cursor-nwse-resize': '.cursor-nwse-resize { cursor: nwse-resize; }',
  'cursor-no-drop': '.cursor-no-drop { cursor: no-drop; }',
  'cursor-none': '.cursor-none { cursor: none; }',
  'cursor-not-allowed': '.cursor-not-allowed { cursor: not-allowed; }',
  'cursor-pointer': '.cursor-pointer { cursor: pointer; }',
  'cursor-progress': '.cursor-progress { cursor: progress; }',
  'cursor-row-resize': '.cursor-row-resize { cursor: row-resize; }',
  'cursor-s-resize': '.cursor-s-resize { cursor: s-resize; }',
  'cursor-se-resize': '.cursor-se-resize { cursor: se-resize; }',
  'cursor-sw-resize': '.cursor-sw-resize { cursor: sw-resize; }',
  'cursor-text': '.cursor-text { cursor: text; }',
  'cursor-url': '.cursor-url { cursor: url(myBall.cur), auto; }',
  'cursor-w-resize': '.cursor-w-resize { cursor: w-resize; }',
  'cursor-wait': '.cursor-wait { cursor: wait; }',
  'cursor-zoom-in': '.cursor-zoom-in { cursor: zoom-in; }',
  'cursor-zoom-out': '.cursor-zoom-out { cursor: zoom-out; }',

  'font-italic': '.font-italic {font-style: italic; }',
  'font-normal': '.font-normal {font-style: normal; }',
  'font-oblique': '.font-oblique {font-style: oblique; }',

  'break-inside-auto': '.break-inside-auto { break-inside: auto; }',
  'break-inside-avoid': '.break-inside-avoid { break-inside: avoid; }',
  'break-inside-avoid-page': '.break-inside-avoid-page { break-inside: avoid-page; }',
  'break-inside-avoid-column': '.break-inside-avoid-column { break-inside: avoid-column; }',


  'caption-side-top': '.caption-side-top { caption-side: top; }',
  'caption-side-bottom': '.caption-side-bottom { caption-side: bottom; }',

  'clear-none': '.clear-none { clear: none; }',
  'clear-left': '.clear-left { clear: left; }',
  'clear-right': '.clear-right { clear: right; }',
  'clear-both': '.clear-both { clear: both; }',
  'clear-inline-start': '.clear-inline-start { clear: inline-start; }',
  'clear-inline-end': '.clear-inline-end { clear: inline-end; }',

  'column-fill-auto': '.column-fill-auto { column-fill: auto; }',
  'column-fill-balance': '.column-fill-balance { column-fill: balance; }',

  'column-rule-none': '.column-rule-none { column-rule-style: none; }',
  'column-rule-hidden': '.column-rule-hidden { column-rule-style: hidden; }',
  'column-rule-dotted': '.column-rule-dotted { column-rule-style: dotted; }',
  'column-rule-dashed': '.column-rule-dashed { column-rule-style: dashed; }',
  'column-rule-solid': '.column-rule-solid { column-rule-style: solid; }',
  'column-rule-double': '.column-rule-double { column-rule-style: double; }',
  'column-rule-groove': '.column-rule-groove { column-rule-style: groove; }',
  'column-rule-ridge': '.column-rule-ridge { column-rule-style: ridge; }',
  'column-rule-inset': '.column-rule-inset { column-rule-style: inset; }',
  'column-rule-outset': '.column-rule-outset { column-rule-style: outset; }',

  'column-span-none': '.column-span-none { column-span: none; }',
  'column-span-all': '.column-span-all { column-span: all; }',

  'direction-ltr': '.direction-ltr { direction: ltr; }',
  'direction-rtl': '.direction-rtl { direction: rtl; }',

  'empty-cells-show': '.empty-cells-show { empty-cells: show; }',
  'empty-cells-hide': '.empty-cells-hide { empty-cells: hide; }',


  'list-none': '.list-none { list-style-type: none; }',
  'list-disc': '.list-disc { list-style-type: disc; }',
  'list-circle': '.list-circle { list-style-type: circle; }',
  'list-square': '.list-square { list-style-type: square; }',
  'list-decimal': '.list-decimal { list-style-type: decimal; }',
  'list-decimal-leading-zero': '.list-type-decimal-leading-zero { list-style-type: decimal-leading-zero; }',
  'list-lower-roman': '.list-lower-roman { list-style-type: lower-roman; }',
  'list-upper-roman': '.list-upper-roman { list-style-type: upper-roman; }',
  'list-lower-alpha': '.list-lower-alpha { list-style-type: lower-alpha; }',
  'list-upper-alpha': '.list-upper-alpha { list-style-type: upper-alpha; }',
  'list-lower-greek': '.list-lower-greek { list-style-type: lower-greek; }',
  'list-lower-latin': '.list-lower-latin { list-style-type: lower-latin; }',
  'list-upper-latin': '.list-upper-latin { list-style-type: upper-latin; }',
  'list-disclosure-closed': '.list-disclosure-closed { list-style-type: disclosure-closed; }',
  'list-disclosure-open': '.list-disclosure-open { list-style-type: disclosure-open; }',

  'list-inside': 'list-inside { list-style-position: inside; }',
  'list-outside': 'list-outside { list-style-position: outside; }',

  'object-fit-fill': '.object-fit-fill { object-fit: fill; }',
  'object-fit-contain': '.object-fit-contain { object-fit: contain; }',
  'object-fit-cover': '.object-fit-cover { object-fit: cover; }',
  'object-fit-none': '.object-fit-none { object-fit: none; }',
  'object-fit-scale-down': '.object-fit-scale-down { object-fit: scale-down; }',

  'outline-style-none': '.outline-style-none { outline-style: none; }',
  'outline-style-dotted': '.outline-style-dotted { outline-style: dotted; }',
  'outline-style-dashed': '.outline-style-dashed { outline-style: dashed; }',
  'outline-style-solid': '.outline-style-solid { outline-style: solid; }',
  'outline-style-double': '.outline-style-double { outline-style: double; }',
  'outline-style-groove': '.outline-style-groove { outline-style: groove; }',
  'outline-style-ridge': '.outline-style-ridge { outline-style: ridge; }',
  'outline-style-inset': '.outline-style-inset { outline-style: inset; }',
  'outline-style-outset': '.outline-style-outset { outline-style: outset; }',
  'outline-style-initial': '.outline-style-initial { outline-style: initial; }',
  'outline-style-inherit': '.outline-style-inherit { outline-style: inherit; }',

  'overflow-x-clip': 'overflow-x-clip { overflow-x: clip; }',
  'overflow-y-clip': 'overflow-y-clip { overflow-y: clip; }',
  'overflow-clip': 'overflow-clip { overflow: clip; }',
  'overflow-visible': '.overflow-visible { overflow: visible; }',
  'overflow-auto': '.overflow-auto { overflow: auto; }',
  'overflow-x-visible': '.overflow-x-visible { overflow-x: visible; }',
  'overflow-x-auto': '.overflow-x-auto { overflow-x: auto; }',
  'overflow-y-visible': '.overflow-y-visible { overflow-y: visible; }',
  'overflow-y-auto': '.overflow-y-auto { overflow-y: auto; }',
  'overflow-wrap-normal': '.overflow-wrap-normal { overflow-wrap: normal; }',
  'overflow-wrap-break': '.overflow-wrap-break { overflow-wrap: break-word; }',

  'scroll-behavior-auto': '.scroll-behavior-auto { scroll-behavior: auto; }',
  'scroll-behavior-smooth': '.scroll-behavior-smooth { scroll-behavior: smooth; }',

  'no-decoration': '.no-decoration { text-decoration: none; }',
  'underline': '.underline { text-decoration: underline; }',
  'overline': '.overline { text-decoration: overline; }',
  'line-through': '.line-through { text-decoration: line-through; }',

  'decoration-solid': '.decoration-solid { text-decoration-style: solid; }',
  'decoration-double': '.decoration-double { text-decoration-style: double; }',
  'decoration-dotted': '.decoration-dotted { text-decoration-style: dotted; }',
  'decoration-dashed': '.decoration-dashed { text-decoration-style: dashed; }',
  'decoration-wavy': '.decoration-wavy { text-decoration-style: wavy; }',

  'text-justify-auto': '.text-justify-auto { text-align: justify; }',
  'text-justify-inter-word': '.text-justify-inter-word { text-align: justify; text-justify: inter-word; }',
  'text-justify-inter-ideograph': '.text-justify-inter-ideograph { text-align: justify; text-justify: inter-ideograph; }',
  'text-justify-inter-cluster': '.text-justify-inter-cluster { text-align: justify; text-justify: inter-cluster; }',
  'text-justify-distribute': '.text-justify-distribute { text-align: justify; text-justify: distribute; }',
  'text-justify-kashida': '.text-justify-kashida { text-align: justify; text-justify: kashida; }',
  'text-justify-tibetan': '.text-justify-tibetan { text-align: justify; text-justify: auto; text-align-last: justify; }',

  'text-orientation-mixed': '.text-orientation-mixed { text-orientation: mixed; }',
  'text-orientation-upright': '.text-orientation-upright { text-orientation: upright; }',
  'text-orientation-sideways': '.text-orientation-sideways { text-orientation: sideways; }',
  'text-orientation-sideways-right': '.text-orientation-sideways-right { text-orientation: sideways-right; }',

  'text-clip': '.text-clip { text-overflow: clip; }',
  'text-ellipsis': '.text-ellipsis { text-overflow: ellipsis; }',

  'white-space-normal': '.white-space-normal { white-space: normal; }',
  'white-space-nowrap': '.white-space-nowrap { white-space: nowrap; }',
  'white-space-pre': '.white-space-pre { white-space: pre; }',
  'white-space-pre-line': '.white-space-pre-line { white-space: pre-line; }',
  'white-space-pre-wrap': '.white-space-pre-wrap { white-space: pre-wrap; }',

  'visibility-visible': '.visibility-visible { visibility: visible; }',
  'visibility-hidden': '.visibility-hidden { visibility: hidden; }',
  'visibility-collapse': '.visibility-collapse { visibility: collapse; }',

  'vertical-align-baseline': '.vertical-align-baseline { vertical-align: baseline; }',
  'vertical-align-sub': '.vertical-align-sub { vertical-align: sub; }',
  'vertical-align-super': '.vertical-align-super { vertical-align: super; }',
  'vertical-align-text-top': '.vertical-align-text-top { vertical-align: text-top; }',
  'vertical-align-text-bottom': '.vertical-align-text-bottom { vertical-align: text-bottom; }',
  'vertical-align-middle': '.vertical-align-middle { vertical-align: middle; }',
  'vertical-align-top': '.vertical-align-top { vertical-align: top; }',
  'vertical-align-bottom': '.vertical-align-bottom { vertical-align: bottom; }',

  'word-break-normal': '.word-break-normal { word-break: normal; }',
  'word-break-keep-all': '.word-break-keep-all { word-break: keep-all; }',
  'word-break-break-all': '.word-break-break-all { word-break: break-all; }',
  'word-wrap-normal': '.word-wrap-normal { word-wrap: normal; }',
  'word-wrap-break-word': '.word-wrap-break-word { word-wrap: break-word; }',

  'box-slice': '.box-slice { box-decoration-break: slice; }',
  'box-clone': '.box-clone { box-decoration-break: clone; }',
  'box-size-content': '.box-size-content { box-sizing: content-box; }',
  'box-size-border': '.box-size-border { box-sizing: border-box; }',

  'break-after-auto': '.break-after-auto { break-after: auto; }',
  'break-after-avoid': '.break-after-avoid { break-after: avoid; }',
  'break-after-always': '.break-after-always { break-after: always; }',
  'break-after-all': '.break-after-all { break-after: all; }',
  'break-after-page': '.break-after-page { break-after: avoid-page; }',
  'break-after-column': '.break-after-column { break-after: avoid-column; }',

  'break-before-auto': '.break-before-auto { break-before: auto; }',
  'break-before-avoid': '.break-before-avoid { break-before: avoid; }',
  'break-before-always': '.break-before-always { break-before: always; }',
  'break-before-all': '.break-before-all { break-before: all; }',
  'break-before-page': '.break-before-page { break-before: avoid-page; }',
  'break-before-column': '.break-before-column { break-before: avoid-column; }',

  'flex-nowrap': '.flex-nowrap { flex-wrap: nowrap; }',
  'flex-wrap': '.flex-wrap { flex-wrap: wrap; }',
  'flex-reverse': '.flex-reverse { flex-wrap: wrap-reverse; }',

  'grid-flow-row': '.grid-flow-row { grid-auto-flow: row; }',
  'grid-flow-cols': '.grid-flow-cols { grid-auto-flow: column; }',
  'grid-flow-row-dense': '.grid-flow-row-dense { grid-auto-flow: row dense; }',
  'grid-flow-cols-dense': '.grid-flow-cols-dense { grid-auto-flow: column dense; }',

  'h-auto': '.h-auto { height: auto; }',
  'hyphens-none': '.hyphens-none { hyphens: none; }',
  'hyphens-manual': '.hyphens-manual { hyphens: manual; }',
  'hyphens-auto': '.hyphens-auto { hyphens: auto; }',

  'img-rendering-auto': '.img-rendering-auto { image-rendering: auto; }',
  'img-rendering-crisp': '.img-rendering-crisp { image-rendering: crisp-edges; }',
  'img-rendering-pix': '.img-rendering-pix { image-rendering: pixelated; }',
  'img-rendering-smooth': '.img-rendering-smooth { image-rendering: smooth; }',

  'isolation-auto': '.isolation-auto { isolation: auto; }',
  'isolation-isolate': '.isolation-isolate { isolation: isolate; }',
  'line-height-normal': '.line-height-normal { line-height: normal; }',

  'mix-normal': '.mix-normal { mix-blend-mode: normal; }',
  'mix-multiply': '.mix-multiply { mix-blend-mode: multiply; }',
  'mix-screen': '.mix-screen { mix-blend-mode: screen; }',
  'mix-overlay': '.mix-overlay { mix-blend-mode: overlay; }',
  'mix-darken': '.mix-darken { mix-blend-mode: darken; }',
  'mix-lighten': '.mix-lighten { mix-blend-mode: lighten; }',
  'mix-color-dodge': '.mix-color-dodge { mix-blend-mode: color-dodge; }',
  'mix-color-burn': '.mix-color-burn { mix-blend-mode: color-burn; }',
  'mix-hard-light': '.mix-hard-light { mix-blend-mode: hard-light; }',
  'mix-soft-light': '.mix-soft-light { mix-blend-mode: soft-light; }',
  'mix-difference': '.mix-difference { mix-blend-mode: difference; }',
  'mix-exclusion': '.mix-exclusion { mix-blend-mode: exclusion; }',
  'mix-hue': '.mix-hue { mix-blend-mode: hue; }',
  'mix-saturation': '.mix-saturation { mix-blend-mode: saturation; }',
  'mix-color': '.mix-color { mix-blend-mode: color; }',
  'mix-luminosity': '.mix-luminosity { mix-blend-mode: luminosity; }',

  'object-top-left': '.object-top-left { object-position: top left; }',
  'object-top-center': '.object-top-center { object-position: top center; }',
  'object-top-right': '.object-top-right { object-position: top right; }',
  'object-center-left': '.object-center-left { object-position: center left; }',
  'object-center-center': '.object-center-center { object-position: center center; }',
  'object-center-right': '.object-center-right { object-position: center right; }',
  'object-bottom-left': '.object-bottom-left { object-position: bottom left; }',
  'object-bottom-center': '.object-bottom-center { object-position: bottom center; }',
  'object-bottom-right': '.object-bottom-right { object-position: bottom right; }',

  'offset-auto': '.offset-auto { offset-anchor: auto; }',
  'offset-center': '.offset-center { offset-anchor: center; }',

  'overscroll-auto': '.overscroll-auto { overscroll-behavior: auto; }',
  'overscroll-contain': '.overscroll-contain { overscroll-behavior: contain; }',
  'overscroll-none': '.overscroll-none { overscroll-behavior: none; }',

  'page-break-after-auto': '.page-break-after-auto { page-break-after: auto; }',
  'page-break-after-always': '.page-break-after-always { page-break-after: always; }',
  'page-break-after-avoid': '.page-break-after-avoid { page-break-after: avoid; }',
  'page-break-after-left': '.page-break-after-left { page-break-after: left; }',
  'page-break-after-right': '.page-break-after-right { page-break-after: right; }',

  'page-break-before-auto': '.page-break-before-auto { page-break-before: auto; }',
  'page-break-before-always': '.page-break-before-always { page-break-before: always; }',
  'page-break-before-avoid': '.page-break-before-avoid { page-break-before: avoid; }',
  'page-break-before-left': '.page-break-before-left { page-break-before: left; }',
  'page-break-before-right': '.page-break-before-right { page-break-before: right; }',

  'paint-normal': '.paint-normal { paint-order: normal; }',
  'paint-fill': '.paint-fill { paint-order: fill; }',
  'paint-stroke': '.paint-stroke { paint-order: stroke; }',
  'paint-markers': '.paint-markers { paint-order: markers; }',

  'perspective-center': '.perspective-center { perspective-origin: center; }',
  'perspective-top-left': '.perspective-top-left { perspective-origin: top left; }',
  'perspective-top': '.perspective-top { perspective-origin: top; }',
  'perspective-top-right': '.perspective-top-right { perspective-origin: top right; }',
  'perspective-left': '.perspective-left { perspective-origin: left; }',
  'perspective-right': '.perspective-right { perspective-origin: right; }',
  'perspective-bottom-left': '.perspective-bottom-left { perspective-origin: bottom left; }',
  'perspective-bottom': '.perspective-bottom { perspective-origin: bottom; }',
  'perspective-bottom-right': '.perspective-bottom-right { perspective-origin: bottom right; }',

  'place-normal': '.place-normal { place-content: normal; }',
  'place-start': '.place-start { place-content: start; }',
  'place-end': '.place-end { place-content: end; }',
  'place-flex-start': '.place-flex-start { place-content: flex-start; }',
  'place-flex-end': '.place-flex-end { place-content: flex-end; }',
  'place-center': '.place-center { place-content: center; }',
  'place-space-between': '.place-space-between { place-content: space-between; }',
  'place-space-around': '.place-space-around { place-content: space-around; }',
  'place-space-evenly': '.place-space-evenly { place-content: space-evenly; }',
  'place-stretch': '.place-stretch { place-content: stretch; }',
  'place-safe-center': '.place-safe-center { place-content: safe center; }',
  'place-unsafe-center': '.place-unsafe-center { place-content: unsafe center; }',
  'place-items-normal': '.place-items-normal { place-items: normal; }',
  'place-items-start': '.place-items-start { place-items: start; }',
  'place-items-end': '.place-items-end { place-items: end; }',
  'place-items-flex-start': '.place-items-flex-start { place-items: flex-start; }',
  'place-items-flex-end': '.place-items-flex-end { place-items: flex-end; }',
  'place-items-center': '.place-items-center { place-items: center; }',
  'place-items-baseline': '.place-items-baseline { place-items: baseline; }',
  'place-items-stretch': '.place-items-stretch { place-items: stretch; }',
  'place-items-safe-center': '.place-items-safe-center { place-items: safe center; }',
  'place-items-unsafe-center': '.place-items-unsafe-center { place-items: unsafe center; }',
  'place-self-auto': '.place-self-auto { place-self: auto; }',
  'place-self-normal': '.place-self-normal { place-self: normal; }',
  'place-self-start': '.place-self-start { place-self: start; }',
  'place-self-end': '.place-self-end { place-self: end; }',
  'place-self-flex-start': '.place-self-flex-start { place-self: flex-start; }',
  'place-self-flex-end': '.place-self-flex-end { place-self: flex-end; }',
  'place-self-center': '.place-self-center { place-self: center; }',
  'place-self-baseline': '.place-self-baseline { place-self: baseline; }',
  'place-self-stretch': '.place-self-stretch { place-self: stretch; }',
  'place-self-safe-center': '.place-self-safe-center { place-self: safe center; }',
  'place-self-unsafe-center': '.place-self-unsafe-center { place-self: unsafe center; }',

  'pointer-auto': '.pointer-auto { pointer-events: auto; }',
  'pointer-none': '.pointer-none { pointer-events: none; }',
  'pointer-visible-painted': '.pointer-visible-painted { pointer-events: visiblePainted; }',
  'pointer-visible-fill': '.pointer-visible-fill { pointer-events: visibleFill; }',
  'pointer-visible-stroke': '.pointer-visible-stroke { pointer-events: visibleStroke; }',
  'pointer-visible': '.pointer-visible { pointer-events: visible; }',
  'pointer-painted': '.pointer-painted { pointer-events: painted; }',
  'pointer-fill': '.pointer-fill { pointer-events: fill; }',
  'pointer-stroke': '.pointer-stroke { pointer-events: stroke; }',
  'pointer-all': '.pointer-all { pointer-events: all; }',

  'resize-none': '.resize-none { resize: none; }',
  'resize-both': '.resize-both { resize: both; }',
  'resize-horizontal': '.resize-horizontal { resize: horizontal; }',
  'resize-vertical': '.resize-vertical { resize: vertical; }',
  'resize-block': '.resize-block { resize: block; }',
  'resize-inline': '.resize-inline { resize: inline; }',
  'resize-initial': '.resize-initial { resize: initial; }',
  'resize-inherit': '.resize-inherit { resize: inherit; }',
  'resize-unset': '.resize-unset { resize: unset; }',

  'scroll-snap-none': '.scroll-snap-none { scroll-snap-align: none; }',
  'scroll-snap-start': '.scroll-snap-start { scroll-snap-align: start; }',
  'scroll-snap-end': '.scroll-snap-end { scroll-snap-align: end; }',
  'scroll-snap-center': '.scroll-snap-center { scroll-snap-align: center; }',
  'scroll-snap-start-end': '.scroll-snap-start-end { scroll-snap-align: start end; }',
  'scroll-snap-start-center': '.scroll-snap-start-center { scroll-snap-align: start center; }',
  'scroll-snap-start-base': '.scroll-snap-start-base { scroll-snap-align: start base; }',
  'scroll-snap-end-start': '.scroll-snap-end-start { scroll-snap-align: end start; }',
  'scroll-snap-end-center': '.scroll-snap-end-center { scroll-snap-align: end center; }',
  'scroll-snap-end-base': '.scroll-snap-end-base { scroll-snap-align: end base; }',
  'scroll-snap-center-start': '.scroll-snap-center-start { scroll-snap-align: center start; }',
  'scroll-snap-center-end': '.scroll-snap-center-end { scroll-snap-align: center end; }',
  'scroll-snap-center-base': '.scroll-snap-center-base { scroll-snap-align: center base; }',
  'scroll-snap-base-start': '.scroll-snap-base-start { scroll-snap-align: base start; }',
  'scroll-snap-base-end': '.scroll-snap-base-end { scroll-snap-align: base end; }',
  'scroll-snap-base-center': '.scroll-snap-base-center { scroll-snap-align: base center; }',

  'scroll-snap-stop-normal': '.scroll-snap-stop-normal { scroll-snap-stop: normal; }',
  'scroll-snap-stop-always': '.scroll-snap-stop-always { scroll-snap-stop: always; }',

  'table-layout-auto': '.table-layout-auto { table-layout: auto; }',
  'table-layout-fixed': '.table-layout-fixed { table-layout: fixed; }',

  'text-justify': `.text-justify { text-align: justify; }`,

  'text-last-auto': '.text-last-auto { text-align-last: auto; }',
  'text-last-start': '.text-last-start { text-align-last: start; }',
  'text-last-end': '.text-last-end { text-align-last: end; }',
  'text-last-left': '.text-last-left { text-align-last: left; }',
  'text-last-right': '.text-last-right { text-align-last: right; }',
  'text-last-center': '.text-last-center { text-align-last: center; }',
  'text-last-justify': '.text-last-justify { text-align-last: justify; }',
  'text-last-match-parent': '.text-last-match-parent { text-align-last: match-parent; }',
  'text-last-initial': '.text-last-initial { text-align-last: initial; }',
  'text-last-inherit': '.text-last-inherit { text-align-last: inherit; }',
  'text-last-unset': '.text-last-unset { text-align-last: unset; }',

  'text-thickness-auto': '.text-thickness-auto { text-decoration-thickness: auto; }',

  'unicode-normal': '.unicode-normal { unicode-bidi: normal; }',
  'unicode-embed': '.unicode-embed { unicode-bidi: embed; }',
  'unicode-override': '.unicode-override { unicode-bidi: bidi-override; }',
  'unicode-isolate': '.unicode-isolate { unicode-bidi: isolate; }',
  'unicode-isolate-override': '.unicode-isolate-override { unicode-bidi: isolate-override; }',
  'unicode-plaintext': '.unicode-plaintext { unicode-bidi: plaintext; }',

  'user-select-auto': '.user-select-auto { user-select: auto; }',
  'user-select-none': '.user-select-none { user-select: none; }',
  'user-select-text': '.user-select-text { user-select: text; }',
  'user-select-all': '.user-select-all { user-select: all; }',
  'user-select-element': '.user-select-element { user-select: element; }',
  'user-select-contain': '.user-select-contain { user-select: contain; }',
  'user-select-contents': '.user-select-contents { user-select: contents; }',

  'writing-horizontal-tb': '.writing-horizontal-tb { writing-mode: horizontal-tb; }',
  'writing-vertical-rl': '.writing-vertical-rl { writing-mode: vertical-rl; }',
  'writing-vertical-lr': '.writing-vertical-lr { writing-mode: vertical-lr; }',
  'writing-sideways-rl': '.writing-sideways-rl { writing-mode: sideways-rl; }',
  'writing-sideways-lr': '.writing-sideways-lr { writing-mode: sideways-lr; }',

  'bg-auto': '.bg-auto { background-size: auto; }',
  'bg-cover': '.bg-cover { background-size: cover; }',
  'bg-contain': '.bg-contain { background-size: contain; }',

  'bg-fixed': '.bg-fixed { background-attachment: fixed; }',
  'bg-local': '.bg-local { background-attachment: local; }',
  'bg-scroll': '.bg-scroll { background-attachment: scroll; }',
  'bg-clip-border': '.bg-clip-border { background-clip: border-box; }',
  'bg-clip-padding': '.bg-clip-padding { background-clip: padding-box; }',
  'bg-clip-content': '.bg-clip-content { background-clip: content-box; }',
  'bg-clip-text': '.bg-clip-text { background-clip: text; }',
  'bg-origin-border': '.bg-origin-border { background-origin: border-box; }',
  'bg-origin-padding': '.bg-origin-padding { background-origin: padding-box; }',
  'bg-origin-content': '.bg-origin-content { background-origin: content-box; }',
  'bg-pos-top-left': '.bg-pos-top-left { background-position: top left; }',
  'bg-pos-top-center': '.bg-pos-top-center { background-position: top center; }',
  'bg-pos-top-right': '.bg-pos-top-right { background-position: top right; }',
  'bg-pos-center-left': '.bg-pos-center-left { background-position: center left; }',
  'bg-pos-center': '.bg-pos-center { background-position: center; }',
  'bg-pos-center-right': '.bg-pos-center-right { background-position: center right; }',
  'bg-pos-bottom-left': '.bg-pos-bottom-left { background-position: bottom left; }',
  'bg-pos-bottom-center': '.bg-pos-bottom-center { background-position: bottom center; }',
  'bg-pos-bottom-right': '.bg-pos-bottom-right { background-position: bottom right; }',
  'bg-image-none': '.bg-image-none { background-image: none; }',
  'origin-left': '.origin-left { transform-origin: left; }',
  'origin-right': '.origin-right { transform-origin: right; }',
  'origin-top': '.origin-top { transform-origin: top; }',
  'origin-bottom': '.origin-bottom { transform-origin: bottom; }',
  'origin-center': '.origin-center { transform-origin: center; }',
  'origin-top-center': '.origin-top-center { transform-origin: top center; }',
  'origin-bottom-center': '.origin-bottom-center { transform-origin: bottom center; }',
  'origin-left-top': '.origin-left-top { transform-origin: left top; }',
  'origin-left-bottom': '.origin-left-bottom { transform-origin: left bottom; }',
  'origin-right-top': '.origin-right-top { transform-origin: right top; }',
  'origin-right-bottom': '.origin-right-bottom { transform-origin: right bottom; }',
  'appearance-none': '.appearance-none { appearance: none; }',
  'caret-inherit': 'caret-inherit { caret-color: inherit; }',
  'caret-current': 'caret-current { caret-color: current; }',
  'caret-transparent': 'caret-inherit { caret-color: transparent; }',
  'touch-auto': '.touch-auto { touch-action: auto; }',
  'touch-none': '.touch-none { touch-action: none; }',
  'touch-pan-x': '.touch-pan-x { touch-action: pan-x; }',
  'touch-pan-y': '.touch-pan-y { touch-action: pan-y; }',
  'touch-pan-x-y': '.touch-pan-x-y { touch-action: pan-x pan-y; }',
  'touch-manipulation': '.touch-manipulation { touch-action: manipulation; }',
  'will-auto': '.will-auto { will-change: auto; }',
  'will-scroll': '.will-scroll { will-change: scroll-position; }',
  'will-content-scroll': '.will-content-scroll { will-change: contents, scroll-position; }',
  'will-opacity': '.will-opacity { will-change: opacity; }',
  'will-transform': '.will-transform { will-change: transform; }',
  'will-top': '.will-top { will-change: top; }',
  'will-left': '.will-left { will-change: left; }',
  'will-box-shadow': '.will-box-shadow { will-change: box-shadow; }',
  'fill-current': '.fill-current { fill: currentColor; }',
  'fill-none': '.fill-none { fill: none; }',
  'fill-inherit': '.fill-inherit { fill: inherit; }',
  'fill-transparent': '.fill-transparent { fill: transparent; }',
  'stroke-current': '.stroke-current { stroke: currentColor; }',
  'stroke-none': '.stroke-none { stroke: none; }',
  'stroke-inherit': '.stroke-inherit { stroke: inherit; }',
  'stroke-transparent': '.stroke-transparent { stroke: transparent; }',
  'table-auto': '.table-auto { table-layout: auto; }',
  'table-fixed': '.table-fixed { table-layout: fixed; }',
  'underline-offset-auto': '.underline-offset-auto: { text-underline-offset: auto }',
  'font-lining': '.font-lining { font-variant-numeric: lining-nums; }',
  'font-oldstyle': '.font-oldstyle { font-variant-numeric: oldstyle-nums; }',
  'font-proportional': '.font-proportional { font-variant-numeric: proportional-nums; }',
  'font-tabular': '.font-tabular { font-variant-numeric: tabular-nums; }',
  'font-slashed': '.font-slashed { font-variant-numeric: slashed-zero; }',
  'font-ordinal': '.font-ordinal { font-variant-numeric: ordinal; }',
  'font-diagonal': '.font-diagonal { font-variant-numeric: diagonal-fractions; }',
  'font-stacked': '.font-stacked { font-variant-numeric: stacked-fractions; }',

  'bg-blend-normal': '.bg-blend-normal { background-blend-mode: normal; }',
  'bg-blend-multiply': '.bg-blend-multiply { background-blend-mode: multiply; }',
  'bg-blend-screen': '.bg-blend-screen { background-blend-mode: screen; }',
  'bg-blend-overlay': '.bg-blend-overlay { background-blend-mode: overlay; }',
  'bg-blend-darken': '.bg-blend-darken { background-blend-mode: darken; }',
  'bg-blend-lighten': '.bg-blend-lighten { background-blend-mode: lighten; }',
  'bg-blend-color-dodge': '.bg-blend-color-dodge { background-blend-mode: color-dodge; }',
  'bg-blend-color-burn': '.bg-blend-color-burn { background-blend-mode: color-burn; }',
  'bg-blend-hard-light': '.bg-blend-hard-light { background-blend-mode: hard-light; }',
  'bg-blend-soft-light': '.bg-blend-soft-light { background-blend-mode: soft-light; }',
  'bg-blend-difference': '.bg-blend-difference { background-blend-mode: difference; }',
  'bg-blend-exclusion': '.bg-blend-exclusion { background-blend-mode: exclusion; }',
  'bg-blend-hue': '.bg-blend-hue { background-blend-mode: hue; }',
  'bg-blend-saturation': '.bg-blend-saturation { background-blend-mode: saturation; }',
  'bg-blend-color': '.bg-blend-color { background-blend-mode: color; }',
  'bg-blend-luminosity': '.bg-blend-luminosity { background-blend-mode: luminosity; }',

  'bg-repeat': '.bg-repeat { background-repeat: repeat; }',
  'bg-repeat-x': '.bg-repeat-x { background-repeat: repeat-x; }',
  'bg-repeat-y': '.bg-repeat-y { background-repeat: repeat-y; }',
  'bg-no-repeat': '.bg-no-repeat { background-repeat: no-repeat; }',
  'bg-space': '.bg-space { background-repeat: space; }',
  'bg-round': '.bg-round { background-repeat: round; }',

  'border-inline-none': '.border-inline-none { border-inline-style: none; }',
  'border-inline-hidden': '.border-inline-hidden { border-inline-style: hidden; }',
  'border-inline-dotted': '.border-inline-dotted { border-inline-style: dotted; }',
  'border-inline-dashed': '.border-inline-dashed { border-inline-style: dashed; }',
  'border-inline-solid': '.border-inline-solid { border-inline-style: solid; }',
  'border-inline-double': '.border-inline-double { border-inline-style: double; }',
  'border-inline-groove': '.border-inline-groove { border-inline-style: groove; }',
  'border-inline-ridge': '.border-inline-ridge { border-inline-style: ridge; }',
  'border-inline-inset': '.border-inline-inset { border-inline-style: inset; }',
  'border-inline-outset': '.border-inline-outset { border-inline-style: outset; }',

  'border-inline-end-none': '.border-inline-end-none { border-inline-end-style: none; }',
  'border-inline-end-hidden': '.border-inline-end-hidden { border-inline-end-style: hidden; }',
  'border-inline-end-dotted': '.border-inline-end-dotted { border-inline-end-style: dotted; }',
  'border-inline-end-dashed': '.border-inline-end-dashed { border-inline-end-style: dashed; }',
  'border-inline-end-solid': '.border-inline-end-solid { border-inline-end-style: solid; }',
  'border-inline-end-double': '.border-inline-end-double { border-inline-end-style: double; }',
  'border-inline-end-groove': '.border-inline-end-groove { border-inline-end-style: groove; }',
  'border-inline-end-ridge': '.border-inline-end-ridge { border-inline-end-style: ridge; }',
  'border-inline-end-inset': '.border-inline-end-inset { border-inline-end-style: inset; }',
  'border-inline-end-outset': '.border-inline-end-outset { border-inline-end-style: outset; }',

  'border-inline-start-style-none': '.border-inline-start-style-none { border-inline-start-style: none; }',
  'border-inline-start-style-hidden': '.border-inline-start-style-hidden { border-inline-start-style: hidden; }',
  'border-inline-start-style-dotted': '.border-inline-start-style-dotted { border-inline-start-style: dotted; }',
  'border-inline-start-style-dashed': '.border-inline-start-style-dashed { border-inline-start-style: dashed; }',
  'border-inline-start-style-solid': '.border-inline-start-style-solid { border-inline-start-style: solid; }',
  'border-inline-start-style-double': '.border-inline-start-style-double { border-inline-start-style: double; }',
  'border-inline-start-style-groove': '.border-inline-start-style-groove { border-inline-start-style: groove; }',
  'border-inline-start-style-ridge': '.border-inline-start-style-ridge { border-inline-start-style: ridge; }',
  'border-inline-start-style-inset': '.border-inline-start-style-inset { border-inline-start-style: inset; }',
  'border-inline-start-style-outset': '.border-inline-start-style-outset { border-inline-start-style: outset; }',

  'border-block-style-none': '.border-block-style-none { border-block-style: none; }',
  'border-block-style-hidden': '.border-block-style-hidden { border-block-style: hidden; }',
  'border-block-style-dotted': '.border-block-style-dotted { border-block-style: dotted; }',
  'border-block-style-dashed': '.border-block-style-dashed { border-block-style: dashed; }',
  'border-block-style-solid': '.border-block-style-solid { border-block-style: solid; }',
  'border-block-style-double': '.border-block-style-double { border-block-style: double; }',
  'border-block-style-groove': '.border-block-style-groove { border-block-style: groove; }',
  'border-block-style-ridge': '.border-block-style-ridge { border-block-style: ridge; }',
  'border-block-style-inset': '.border-block-style-inset { border-block-style: inset; }',
  'border-block-style-outset': '.border-block-style-outset { border-block-style: outset; }',

  'border-block-end-style-none': '.border-block-end-style-none { border-block-end-style: none; }',
  'border-block-end-style-hidden': '.border-block-end-style-hidden { border-block-end-style: hidden; }',
  'border-block-end-style-dotted': '.border-block-end-style-dotted { border-block-end-style: dotted; }',
  'border-block-end-style-dashed': '.border-block-end-style-dashed { border-block-end-style: dashed; }',
  'border-block-end-style-solid': '.border-block-end-style-solid { border-block-end-style: solid; }',
  'border-block-end-style-double': '.border-block-end-style-double { border-block-end-style: double; }',
  'border-block-end-style-groove': '.border-block-end-style-groove { border-block-end-style: groove; }',
  'border-block-end-style-ridge': '.border-block-end-style-ridge { border-block-end-style: ridge; }',
  'border-block-end-style-inset': '.border-block-end-style-inset { border-block-end-style: inset; }',
  'border-block-end-style-outset': '.border-block-end-style-outset { border-block-end-style: outset; }',

  'border-block-start-style-none': '.border-block-start-style-none { border-block-start-style: none; }',
  'border-block-start-style-hidden': '.border-block-start-style-hidden { border-block-start-style: hidden; }',
  'border-block-start-style-dotted': '.border-block-start-style-dotted { border-block-start-style: dotted; }',
  'border-block-start-style-dashed': '.border-block-start-style-dashed { border-block-start-style: dashed; }',
  'border-block-start-style-solid': '.border-block-start-style-solid { border-block-start-style: solid; }',
  'border-block-start-style-double': '.border-block-start-style-double { border-block-start-style: double; }',
  'border-block-start-style-groove': '.border-block-start-style-groove { border-block-start-style: groove; }',
  'border-block-start-style-ridge': '.border-block-start-style-ridge { border-block-start-style: ridge; }',
  'border-block-start-style-inset': '.border-block-start-style-inset { border-block-start-style: inset; }',
  'border-block-start-style-outset': '.border-block-start-style-outset { border-block-start-style: outset; }',
  
  'border-l-none': '.border-l-none { border-left-style: none; }',
  'border-l-hidden': '.border-l-hidden { border-left-style: hidden; }',
  'border-l-dotted': '.border-l-dotted { border-left-style: dotted; }',
  'border-l-dashed': '.border-l-dashed { border-left-style: dashed; }',
  'border-l-solid': '.border-l-solid { border-left-style: solid; }',
  'border-l-double': '.border-l-double { border-left-style: double; }',
  'border-l-groove': '.border-l-groove { border-left-style: groove; }',
  'border-l-ridge': '.border-l-ridge { border-left-style: ridge; }',
  'border-l-inset': '.border-l-inset { border-left-style: inset; }',
  'border-l-outset': '.border-l-outset { border-left-style: outset; }',

  'border-r-none': '.border-r-none { border-right-style: none; }',
  'border-r-hidden': '.border-r-hidden { border-right-style: hidden; }',
  'border-r-dotted': '.border-r-dotted { border-right-style: dotted; }',
  'border-r-dashed': '.border-r-dashed { border-right-style: dashed; }',
  'border-r-solid': '.border-r-solid { border-right-style: solid; }',
  'border-r-double': '.border-r-double { border-right-style: double; }',
  'border-r-groove': '.border-r-groove { border-right-style: groove; }',
  'border-r-ridge': '.border-r-ridge { border-right-style: ridge; }',
  'border-r-inset': '.border-r-inset { border-right-style: inset; }',
  'border-r-outset': '.border-r-outset { border-right-style: outset; }',

  'border-t-none': '.border-t-none { border-top-style: none; }',
  'border-t-hidden': '.border-t-hidden { border-top-style: hidden; }',
  'border-t-dotted': '.border-t-dotted { border-top-style: dotted; }',
  'border-t-dashed': '.border-t-dashed { border-top-style: dashed; }',
  'border-t-solid': '.border-t-solid { border-top-style: solid; }',
  'border-t-double': '.border-t-double { border-top-style: double; }',
  'border-t-groove': '.border-t-groove { border-top-style: groove; }',
  'border-t-ridge': '.border-t-ridge { border-top-style: ridge; }',
  'border-t-inset': '.border-t-inset { border-top-style: inset; }',
  'border-t-outset': '.border-t-outset { border-top-style: outset; }',

  'border-b-none': '.border-b-none { border-bottom-style: none; }',
  'border-b-hidden': '.border-b-hidden { border-bottom-style: hidden; }',
  'border-b-dotted': '.border-b-dotted { border-bottom-style: dotted; }',
  'border-b-dashed': '.border-b-dashed { border-bottom-style: dashed; }',
  'border-b-solid': '.border-b-solid { border-bottom-style: solid; }',
  'border-b-double': '.border-b-double { border-bottom-style: double; }',
  'border-b-groove': '.border-b-groove { border-bottom-style: groove; }',
  'border-b-ridge': '.border-b-ridge { border-bottom-style: ridge; }',
  'border-b-inset': '.border-b-inset { border-bottom-style: inset; }',
  'border-b-outset': '.border-b-outset { border-bottom-style: outset; }',

  'border-l-width-thin': '.border-l-width-thin { border-left-width: thin; }',
  'border-l-width-medium': '.border-l-width-medium { border-left-width: medium; }',
  'border-l-width-thick': '.border-l-width-thick { border-left-width: thick; }',

  'border-r-width-thin': '.border-r-width-thin { border-right-width: thin; }',
  'border-r-width-medium': '.border-r-width-medium { border-right-width: medium; }',
  'border-r-width-thick': '.border-r-width-thick { border-right-width: thick; }',

  'border-t-width-thin': '.border-t-width-thin { border-top-width: thin; }',
  'border-t-width-medium': '.border-t-width-medium { border-top-width: medium; }',
  'border-t-width-thick': '.border-t-width-thick { border-top-width: thick; }',

  'border-b-width-thin': '.border-b-width-thin { border-bottom-width: thin; }',
  'border-b-width-medium': '.border-b-width-medium { border-bottom-width: medium; }',
  'border-b-width-thick': '.border-b-width-thick { border-bottom-width: thick; }',


  'font-kerning-auto': '.font-kerning-auto { font-kerning: auto; }',
  'font-kerning-normal': '.font-kerning-normal { font-kerning: normal; }',
  'font-kerning-none': '.font-kerning-none { font-kerning: none; }',

  'font-ultra-condensed': '.font-ultra-condensed { font-stretch: ultra-condensed; }',
  'font-extra-condensed': '.font-extra-condensed { font-stretch: extra-condensed; }',
  'font-condensed': '.font-condensed { font-stretch: condensed; }',
  'font-semi-condensed': '.font-semi-condensed { font-stretch: semi-condensed; }',
  'font-stretch-normal': '.font-stretch-normal { font-stretch: normal; }',
  'font-semi-expanded': '.font-semi-expanded { font-stretch: semi-expanded; }',
  'font-expanded': '.font-expanded { font-stretch: expanded; }',
  'font-extra-expanded': '.font-extra-expanded { font-stretch: extra-expanded; }',
  'font-ultra-expanded': '.font-ultra-expanded { font-stretch: ultra-expanded; }',

  'font-caps-normal': '.font-caps-normal { font-variant-caps: normal; }',
  'font-caps-small': '.font-caps-small { font-variant-caps: small-caps; }',
  'font-caps-all-small': '.font-caps-all-small { font-variant-caps: all-small-caps; }',
  'font-caps-petite': '.font-caps-petite { font-variant-caps: petite-caps; }',
  'font-caps-all-petite': '.font-caps-all-petite { font-variant-caps: all-petite-caps; }',
  'font-caps-unicase': '.font-caps-unicase { font-variant-caps: unicase; }',
  'font-caps-titling': '.font-caps-titling { font-variant-caps: titling-caps; }',

  'hanging-punctuation-none': '.hanging-punctuation-none { hanging-punctuation: none; }',
  'hanging-punctuation-first': '.hanging-punctuation-first { hanging-punctuation: first; }',
  'hanging-punctuation-last': '.hanging-punctuation-last { hanging-punctuation: last; }',
  'hanging-punctuation-force-end': '.hanging-punctuation-force-end { hanging-punctuation: force-end; }',

  'overflow-anchor-auto': '.overflow-anchor-auto { overflow-anchor: auto; }',
  'overflow-anchor-none': '.overflow-anchor-none { overflow-anchor: none; }'

















};


/**
 * TODO:
 * To revisit / Temporarily skipped
 * - animation
 * - keep a list of not-founds in memory to optimize compilation
 */

const cacheFolder = __dirname + '/../classes.cache';

// Create the cache folder if it doesn't exist
if (!fs.existsSync(cacheFolder)) {
  fs.mkdirSync(cacheFolder);
}

for (const key in classes) {
  const cleanedKey = key.replaceAll(/\n/g, '');
  const cleanedValue = classes[key].replaceAll(/\n/g, '');
  const firstLetter = cleanedKey.charAt(0).toLowerCase();
  const fileName = `${firstLetter}.cache.json`;
  const filePath = path.join(cacheFolder, fileName);

  let fileContent = {};
  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, 'utf8');

    if (existingContent) {
      try {
        fileContent = JSON.parse(existingContent);
      } catch (err) {
        console.error(`Error parsing JSON in ${fileName}:`, err);
        continue;
      }
    }
  }

  fileContent[cleanedKey] = cleanedValue;

  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2));
}






