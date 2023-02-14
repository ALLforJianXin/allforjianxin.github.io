// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.png' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '戬心,宝莲灯前传,宝莲灯,杨戬,敖寸心',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: 'code-WjLCCFHZ0y' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#e89083' }], // 移动浏览器主题颜色
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }], // 阿里在线图标
  ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3129839_xft6cqs5gc.css' }], // 阿里在线图标
  ['noscript', {}, '<meta http-equiv="refresh" content="0; url=https://cho.alloy.ink/"><style>.theme-vdoing-content { display:none }'],
  // WebApp图标
  ['link', { rel: 'apple-touch-icon', sizes:"76x76", href: '/img/apple-touch-icon/apple-touch-icon-76x76.png' }], 
  ['link', { rel: 'apple-touch-icon', sizes:"120x120", href: '/img/apple-touch-icon/apple-touch-icon-120x120.png' }], 
  ['link', { rel: 'apple-touch-icon', sizes:"152x152", href: '/img/apple-touch-icon/apple-touch-icon-152x152.png' }], 
  ['link', { rel: 'apple-touch-icon', sizes:"180x180", href: '/img/apple-touch-icon/apple-touch-icon-180x180.png' }],
  ['link', { rel: 'apple-touch-icon', sizes:"58x58", href: '/img/apple-touch-icon/android-touch-icon.png' }], 
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
]
