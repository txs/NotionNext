/**
 * 在此处配置字体
 */
const BLOG = require('../blog.config')
// const { fontFamily } = require('tailwindcss/defaultTheme')

function CJK() {
  switch (BLOG.LANG.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return 'SC'
    case 'zh':
    case 'zh-hk':
    case 'zh-tw':
      return 'TC'
    case 'ja':
    case 'ja-jp':
      return 'JP'
    case 'ko':
    case 'ko-kr':
      return 'KR'
    default:
      return null
  }
}

const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]

const fontFamilies = {
  sans: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"PingFang SC"',
    'HarmonyOS_Regular',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    '"Noto Sans CJK SC"',
    '"WenQuanYi Micro Hei"',
    'Arial',
    'sans-serif',
    ...fontSansCJK
  ],
  noEmoji: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'sans-serif'
  ]
}

module.exports = fontFamilies
