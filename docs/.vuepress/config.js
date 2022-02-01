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
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }], // 阿里在线图标
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3129839_xft6cqs5gc.css' }], // 阿里在线图标
    ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://cho.alloy.ink/"><style>.theme-vdoing-content { display:none }']
  ],
  plugins,
  themeConfig,
  // 私密文章配置
  privatePage: {
    username: 'jianxin',    // 用户名
    password: '123456',    // 密码
    expire: 1000 * 60 * 60 * 24,   // 有效时间：毫秒(ms)。过期后访问私密文章重新输入用户名和密码。默认一天
    loginPath: "/vdoing/login/",    // 引用登录组件的 md 文章中 frontmatter 的 permalink。（必须），建议支持 /vdoing/login/，无默认值
    loginKey: 'vdoing_login',    // 存储用户名信息的 key，默认是 vdoing_login。系统通过该 key 验证是否登录、是否过期。（请不要与任意文章中 frontmatter 的 title 冲突）
    loginSession: false,     // 是否开启在文章页面关闭或刷新后，清除登录状态。这样再次访问任何私密文章，都需要重新验证登录，默认为 false（不开启）
  },
}
