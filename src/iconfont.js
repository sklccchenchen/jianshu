import { createGlobalStyle } from 'styled-components'

export const Iconfont = createGlobalStyle`
@font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1556593636632'); /* IE9 */
    src: url('./iconfont.eot?t=1556593636632#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1556593636632') format('woff'),
    url('./iconfont.ttf?t=1556593636632') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1556593636632#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`