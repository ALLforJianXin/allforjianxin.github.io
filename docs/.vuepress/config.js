const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "戬心Press",
  description: '戬心同人站，致敬每个爱他们的你。',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }]
  ],
  plugins,
  themeConfig,
}
