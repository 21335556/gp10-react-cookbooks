// @mixin wrap($is-wrap: true) {
//   @if $is-wrap == true {
//       word-wrap: break-word;
//       word-break: break-all;
//   } @else {
//       white-space: nowrap;
//   }
// }

// /**
// * @module 文本
// * @description 文本碰到边界是否换行
// * @method wrap
// * @version 1.0.0
// * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>
// */
// @mixin ellipsis($width: null, $line-clamp: 1) {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   width: $width;
//   @if abs($line-clamp) > 1 {
//       // 要使得多行截取生效，display的值只能为-webkit-box
//       display: -webkit-box !important;
//       -webkit-line-clamp: $line-clamp;
//       @include flex-direction(column);
//       @include wrap;
//   } @else {
//       @include wrap(false);
//   }
// }

import styled from 'styled-components'

const wrap = (isWrap=true) => {
  if (isWrap) {
    return `
    word-wrap: break-word;
    word-break: break-all;
   `
  } else {
    return `
      white-space: nowrap;
    `
  }
}

const Case1 = (lineClamp) => {
  return `
  display: -webkit-box !important;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  ${wrap()}
`
}

const Case2 = `
  ${wrap(false)}
`

export default ({
  component = null,
  width = 'auto',
  lineClamp=1
}) => {
  return styled(component)`
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${width};
    ${Math.abs(lineClamp) > 1 ? Case1(lineClamp) : Case2}
  `
}