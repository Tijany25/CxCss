const digitPattern = '(\\d+)' 
const colorPattern = '(\\#?[\\d\\w]+|\\w+\\(.+\\))'
const lineStylePattern = '(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)'

const classPatterns = {
  [`^mt-${digitPattern}$`]: '.mt-$1 { margin-top: $1px; }',
  [`^mb-${digitPattern}$`]: '.mb-$1 { margin-bottom: $1px; }',
  [`^ml-${digitPattern}$`]: '.ml-$1 { margin-left: $1px; }',
  [`^mr-${digitPattern}$`]: '.mr-$1 { margin-right: $1px; }',
  [`^mx-${digitPattern}$`]: '.mx-$1 { margin-left: $1px; margin-right: $1px; }',
  [`^my-${digitPattern}$`]: '.my-$1 { margin-top: $1px; margin-bottom: $1px; }',
  [`^m-${digitPattern}$`]: '.m-$1 { margin: $1px; }',
  [`^p-${digitPattern}$`]: '.p-$1 { padding: $1px; }',
  [`^pt-${digitPattern}$`]: '.pt-$1 { padding-top: $1px; }',
  [`^pb-${digitPattern}$`]: '.pb-$1 { padding-bottom: $1px; }',
  [`^pl-${digitPattern}$`]: '.pl-$1 { padding-left: $1px; }',
  [`^pr-${digitPattern}$`]: '.pr-$1 { padding-right: $1px; }',
  [`^px-${digitPattern}$`]: '.px-$1 { padding-left: $1px; padding-right: $1px; }',
  [`^py-${digitPattern}$`]: '.py-$1 { padding-top: $1px; padding-bottom: $1px; }',
  
  [`^w-${digitPattern}$`]: '.w-$1 { width: $1px; }',
  [`^w-${digitPattern}(p)$`]: '.w-$1p { width: $1%; }',
  [`^max-w-${digitPattern}(p)$`]: '.max-w-$1p { max-width: $1%; }',
  [`^min-w-${digitPattern}$`]: '.min-w-$1 { min-width: $1px; }',
  [`^min-w-${digitPattern}(p)$`]: '.min-w-$1p { min-width: $1%; }',
  [`^h-${digitPattern}$`]: '.h-$1 { height: $1px; }',
  [`^h-${digitPattern}(p)$`]: '.h-$1p { height: $1%; }',
  [`^t-${digitPattern}$`]: '.t-$1 { top: $1px; }',
  [`^t-${digitPattern}(p)$`]: '.t-$1p { top: $1%; }',
  [`^b-${digitPattern}$`]: '.b-$1 { bottom: $1px; }',
  [`^b-${digitPattern}(p)$`]: '.b-$1p { bottom: $1%; }',
  [`^l-${digitPattern}$`]: '.l-$1 { left: $1px; }',
  [`^l-${digitPattern}(p)$`]: '.l-$1p { left: $1%; }',
  [`^r-${digitPattern}$`]: '.r-$1 { right: $1px; }',
  [`^r-${digitPattern}(p)$`]: '.r-$1p { right: $1%; }',
  [`^z-index-${digitPattern}$`]: '.z-index-$1, .z-$1 { z-index: $1; }',
  [`^z-index--${digitPattern}$`]: '.z-index--$1, .z--$1 { z-index: -$1; }',
  [`^grid-${digitPattern}-cols-auto$`]: '.grid-$1-cols-auto { grid-template-columns: repeat($1, auto); }',
  [`^grid-${digitPattern}-cols-1fr$`]: '.grid-$1-cols-1fr { grid-template-columns: repeat($1, 1fr); }',
  [`^grid-col-span-${digitPattern}$`]: '.grid-col-span-$1 { grid-column: span $1; }',
  [`^gap-${digitPattern}$`]: '.gap-$1 { gap: $1; }',
  [`^radius-${digitPattern}$`]: '.radius-$1 { border-radius: $1; }',
  [`^radius-t-r-${digitPattern}$`]: '.radius-t-r-$1 { border-top-right-radius: $1  }',
  [`^radius-t-l-${digitPattern}$`]: '.radius-t-l-$1 { border-top-left-radius: $1  }',
  [`^radius-b-r-${digitPattern}$`]: '.radius-b-r-$1 { border-bottom-right-radius: $1  }',
  [`^radius-b-l-${digitPattern}$`]: '.radius-b-l-$1 { border-bottom-left-radius: $1  }',
  [`^border-${digitPattern}$`]: '.border-$1 { border-width: $1px; }',
  [`^border-t-${digitPattern}$`]: '.border-t-$1 { border-top-width: $1px; }',
  [`^border-b-${digitPattern}$`]: '.border-b-$1 { border-bottom-width: $1px; }',
  [`^border-l-${digitPattern}$`]: '.border-l-$1 { border-left-width: $1px; }',
  [`^border-r-${digitPattern}$`]: '.border-r-$1 { border-right-width: $1px; }',
  [`^border-x-${digitPattern}$`]: '.border-x-$1 { border-left-width: $1px; border-right-width: $1px;}',
  [`^border-y-${digitPattern}$`]: '.border-y-$1 { border-top-width: $1px; border-bottom-width: $1px;}',
  [`^outline-${digitPattern}$`]: '.outline-$1 { outline-width: $1px; }',
  [`^outline-offset-${digitPattern}$`]: '.outline-offset-$1 { outline-offset: $1px; }',
  [`^line-height-${digitPattern}$`]: '.line-height-$1 { line-height: $1px; }',
  [`^rotate-x-${digitPattern}$`]: '.rotate-x-$1 { transform: rotateX($1deg); }',
  [`^rotate-x--${digitPattern}$`]: '.rotate-x--$1 { transform: rotateX(-$1deg); }',
  [`^rotate-y-${digitPattern}$`]: '.rotate-y-$1 { transform: rotateY($1deg); }',
  [`^rotate-y--${digitPattern}$`]: '.rotate-y--$1 { transform: rotateY(-$1deg); }',
  [`^rotate-z-${digitPattern}$`]: '.rotate-z-$1 { transform: rotateZ($1deg); }',
  [`^rotate-z--${digitPattern}$`]: '.rotate-z--$1 { transform: rotateZ(-$1deg); }',
  [`^opacity-${digitPattern}$`]: '.opacity-$1 { opacity: $1%; }',
  [`^h-${digitPattern}vh$`]: '.h-$1vh { height: $1vh; }',
  [`^max-h-${digitPattern}vh$`]: '.max-h-$1vh { max-height: $1vh; }',
  [`^min-h-${digitPattern}vh$`]: '.min-h-$1vh { min-height: $1vh; }',
  [`^max-w-${digitPattern}$`]: '.max-w-$1 { max-width: $1px; }',
  [`^text-${digitPattern}$`]: '.text-$1 { font-size: $1px; }',
  [`^ratio-${digitPattern}/${digitPattern}$`]: '.ratio-$1/$2 { aspect-ratio: $1/$2; }',
  [`^ratio-${digitPattern}$`]: '.ratio-$1 { aspect-ratio: $1; }',
  [`^block-size-${digitPattern}$`]: '.block-size-$1 { block-size: $1px; }',
  [`^color-${colorPattern}$`]: ".color-$1 { color: $1; }",
  [`^bg-${colorPattern}$`]: ".bg-$1 { background-color: $1; }",
  [`^border-${colorPattern}$`]: ".border-$1 { border-color: $1; }",
  [`^accent-${colorPattern}$`]: ".accent-\\$1 { accent-color: $1; }",
  // '((?:blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|sepia|saturate)-[^|]+)': '.$1 { backdrop-filter:  }'

  '^blur-(\\d+%?)$': '.blur-$1 { backdrop-filter: blur($1); }',
  '^brightness-(\\d+%?)$': '.brightness-$1 { backdrop-filter: brightness($1); }',
  '^contrast-(\\d+%?)$': '.contrast-$1 { backdrop-filter: contrast($1); }',
  '^drop-shadow\\((.+)\\)$': '.drop-shadow-$1 { backdrop-filter: drop-shadow($1); }',
  '^grayscale-(\\d+%?)$': '.grayscale-$1 { backdrop-filter: grayscale($1); }',
  '^hue-rotate-(\\d+deg)$': '.hue-rotate-$1 { backdrop-filter: hue-rotate($1); }',
  '^invert-(\\d+%?)$': '.invert-$1 { backdrop-filter: invert($1); }',
  '^backdrop-opacity-(\\d+%?)$': '.backdrop-opacity-$1 { backdrop-filter: opacity($1); }',
  '^sepia-(\\d+%?)$': '.sepia-$1 { backdrop-filter: sepia($1); }',
  '^saturate-(\\d+%?)$': '.saturate-$1 { backdrop-filter: saturate($1); }',


  [`^border-block-${digitPattern}$`]: '.border-block-$1 { border-block-width: $1px; }',
  [`^border-block-${colorPattern}$`]: '.border-block-$1 { border-block-color: $1; }',


  [`^clip-circle-${digitPattern}$`]: ".clip-circle-$1 { clip-path: circle($1px); }",
  [`^clip-circle-${digitPattern}p$`]: ".clip-circle-$1p { clip-path: circle($1%); }",

  [`^shadow-${digitPattern}-${digitPattern}-${digitPattern}-${digitPattern}-${colorPattern}$`]: ".shadow-$1-$2-$3-$4-$5 { box-shadow: $1px $2px $3px $4px $5; }",

  [`^caret-${colorPattern}}`]: "caret-$1 { caret-color: $1; }",
  [`^clip-${digitPattern}-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".clip-$1-$2-$3-$4 { clip: rect($1px, $2px, $3px, $4px); }",
  [`^column-count-${digitPattern}$`]: ".column-count-$1 { column-count: $1; }",
  [`^column-gap-${digitPattern}$`]: ".column-gap-$1 { column-gap: $1px; }",
  [`^column-rule-${digitPattern}-${lineStylePattern}-${colorPattern}$`]: ".column-rule-$1-$2-$3 { column-rule: $1px $2 $3; }",
  [`^column-color-${colorPattern}$`]: ".column-color-$1 { column-rule-color: $1; }",
  [`^column-style-${lineStylePattern}$`]: ".column-style-$1 { column-rule-style: $1; }",
  [`^column-rule-width-${digitPattern}$`]: ".column-rule-width-$1 { column-rule-width: $1px; }",
  [`^column-width-${digitPattern}$`]: ".column-width-$1 { column-width: $1px; }",
  [`^columns-${digitPattern}-${digitPattern}$`]: ".columns-$1-$2 { columns: $1px $2; }",
  [`^flex-basis-${digitPattern}$`]: ".flex-basis-$1 { flex-basis: $1px; }",
  [`^flex-grow-${digitPattern}$`]: ".flex-grow-$1 { flex-grow: $1; }",
  [`^flex-shrink-${digitPattern}$`]: ".flex-shrink-$1 { flex-shrink: $1; }",
  [`^grid-area-${digitPattern}-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".grid-area-$1-$2-$3-$4 { grid-area: $1 / $2 / span $3 / span $4; }",
  [`^grid-auto-cols-${digitPattern}$`]: ".grid-auto-columns-$1 { grid-auto-columns: $1px; }",
  [`^grid-auto-rows-${digitPattern}$`]: ".grid-auto-rows-$1 { grid-auto-rows: $1px; }",
  [`^grid-cols-gap-${digitPattern}$`]: ".grid-cols-gap-$1 { grid-column-gap: $1px; }",
  [`^grid-gap-${digitPattern}$`]: ".grid-gap-$1 { grid-gap: $1px; }",
  [`^grid-row-gap-${digitPattern}$`]: ".grid-row-gap-$1 { grid-row-gap: $1px; }",
  [`^inline-size-${digitPattern}$`]: ".inline-size-$1 { inline-size: $1px; }",
  [`^inset-${digitPattern}$`]: ".inset-$1 { inset: $1px; }",
  [`^inset-block-${digitPattern}$`]: ".inset-block-$1 { inset-block: $1px; }",
  [`^inset-block-${digitPattern}$`]: ".inset-block-$1-$2 { inset-block: $1px $2px; }",
  [`^inset-block-end${digitPattern}$`]: ".inset-block-end-$1 { inset-block-end: $1px; }",
  [`^inset-block-start${digitPattern}$`]: ".inset-block-start-$1 { inset-block-start: $1px; }",
  [`^inset-inline-${digitPattern}$`]: ".inset-inline-$1 { inset-inline: $1px; }",
  [`^inset-inline-${digitPattern}$`]: ".inset-inline-$1-$2 { inset-inline: $1px $2px; }",
  [`^inset-inline-end${digitPattern}$`]: ".inset-inline-end-$1 { inset-inline-end: $1px; }",
  [`^inset-inline-start${digitPattern}$`]: ".inset-inline-start-$1 { inset-inline-start: $1px; }",

  [`^letter-spacing-${digitPattern}$`]: ".letter-spacing-$1 { letter-spacing: $1px; }",
  [`^text-spacing-${digitPattern}$`]: ".text-spacing-$1 { letter-spacing: $1px; }",
  [`^max-block-size-${digitPattern}$`]: ".max-block-size-$1 { max-block-size: $1px; }",
  [`^max-inline-size-${digitPattern}$`]: ".max-inline-size-$1 { max-inline-size: $1px; }",
  [`^min-block-size-${digitPattern}$`]: ".min-block-size-$1 { min-block-size: $1px; }",
  [`^min-inline-size-${digitPattern}$`]: ".min-inline-size-$1 { min-inline-size: $1px; }",

  [`^object-position-${digitPattern}-${digitPattern}$`]: ".object-position-$1-$2 { object-position: $1px $2px; }",
  [`^object-position-${digitPattern}-${digitPattern}(p)$`]: ".object-position-$1-$2p { object-position: $1px $2%; }",
  [`^object-position-${digitPattern}(p)-${digitPattern}$`]: ".object-position-$1p-$2 { object-position: $1% $2px; }",
  [`^object-position-${digitPattern}(p)-${digitPattern}(p)$`]: ".object-position-$1p-$2p { object-position: $1% $2%; }",
  [`^offset-${digitPattern}$`]: ".offset-$1 { offset-distance: $1px; }",
  [`^offset-${digitPattern}(p)$`]: ".offset-$1p { offset-distance: $1%; }",

  [`^order-${digitPattern}$`]: ".order-$1 { order: $1; }",

  [`^orphans-${digitPattern}$`]: ".orphans-$1 { orphans: $1; }",

  [`^perspective-${digitPattern}$`]: ".perspective-$1 { perspective: $1px; }",
  [`^perspective-${digitPattern}(p)$`]: ".perspective-$1p { perspective: $1%; }",

  [`^row-gap-${digitPattern}$`]: ".row-gap-$1 { row-gap: $1px; }",

  [`^scale-${digitPattern}$`]: ".scale-$1 { scale: $1; }",
  [`^scale-${digitPattern}-${digitPattern}$`]: ".scale-$1-$2 { scale: $1 $2; }",
  [`^scale-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".scale-$1-$2-$3 { scale: $1 $2 $3; }",

  [`^scroll-m-${digitPattern}$`]: ".scroll-m-$1 { scroll-margin: $1px; }",
  [`^scroll-m-${digitPattern}-${digitPattern}$`]: ".scroll-m-$1-$2 { scroll-margin: $1px $2px; }",
  [`^scroll-m-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".scroll-m-$1-$2-$3 { scroll-margin: $1px $2px $3px; }",
  [`^scroll-m-${digitPattern}-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".scroll-m-$1-$2-$3-$4 { scroll-margin: $1px $2px $3px $4px; }",
  [`^scroll-mt-${digitPattern}$`]: ".scroll-mt-$1 { scroll-margin: $1px; }",
  [`^scroll-mb-${digitPattern}$`]: ".scroll-mb-$1 { scroll-margin: $1px; }",
  [`^scroll-ml-${digitPattern}$`]: ".scroll-ml-$1 { scroll-margin: $1px; }",
  [`^scroll-mr-${digitPattern}$`]: ".scroll-mr-$1 { scroll-margin: $1px; }",

  [`^scroll-p-${digitPattern}$`]: ".scroll-p-$1 { scroll-padding: $1px; }",
  [`^scroll-p-${digitPattern}-${digitPattern}$`]: ".scroll-p-$1-$2 { scroll-padding: $1px $2px; }",
  [`^scroll-p-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".scroll-p-$1-$2-$3 { scroll-padding: $1px $2px $3px; }",
  [`^scroll-p-${digitPattern}-${digitPattern}-${digitPattern}-${digitPattern}$`]: ".scroll-p-$1-$2-$3-$4 { scroll-padding: $1px $2px $3px $4px; }",
  [`^scroll-pt-${digitPattern}$`]: ".scroll-pt-$1 { scroll-padding: $1px; }",
  [`^scroll-pb-${digitPattern}$`]: ".scroll-pb-$1 { scroll-padding: $1px; }",
  [`^scroll-pl-${digitPattern}$`]: ".scroll-pl-$1 { scroll-padding: $1px; }",
  [`^scroll-pr-${digitPattern}$`]: ".scroll-pr-$1 { scroll-padding: $1px; }",

  [`^scrollbar-color-${colorPattern}$`]: ".scrollbar-color-$1 { scrollbar-color: $1; }",
  [`^scrollbar-color-${colorPattern}-${colorPattern}$`]: ".scrollbar-color-$1-$2 { scrollbar-color: $1 $2; }",

  [`^tab-size-${digitPattern}$`]: ".tab-size-$1 { tab-size: $1; }",

  [`^decoration-color-${colorPattern}$`]: ".decoration-color-$1 { text-decoration-color: $1; }",
  [`^decoration-thickness-${digitPattern}$`]: ".decoration-thickness-$1 { text-decoration-thickness: $1px; }",
  [`^decoration-thickness-${digitPattern}(p)$`]: ".decoration-thickness-$1p { text-decoration-thickness: $1%; }",
  [`^indent-${digitPattern}$`]: ".indent-$1 { text-indent: $1px; }",
  [`^indent-${digitPattern}(p)$`]: ".indent-$1p { text-indent: $1%; }",

  [`^text-shadow-${digitPattern}-${digitPattern}-${digitPattern}-${colorPattern}$`]: ".text-shadow-$1-$2-$3-$4 { text-shadow: $1px $2px $3px $4; }",
  [`^text-shadow-${digitPattern}-${digitPattern}-${colorPattern}$`]: ".text-shadow-$1-$2-$3 { text-shadow: $1px $2px $3; }",
  [`^text-shadow-${digitPattern}-${digitPattern}$`]: ".text-shadow-$1-$2 { text-shadow: $1px $2px; }",

  [`^widows-${digitPattern}$`]: ".widows-$1 { widows: $1; }",

  [`^word-spacing-${digitPattern}$`]: ".word-spacing-$1 { word-spacing: $1px; }"

};

/***
 * TODO:
 * 
 * - optimise backdrop filter to return a single definition when used in the same classname
 */

module.exports = {classPatterns};
