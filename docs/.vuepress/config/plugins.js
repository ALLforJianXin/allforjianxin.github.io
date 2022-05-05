// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        // {
        //   title: '在MDN中搜索',
        //   frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        //   behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        // },
        // {
        //   title: '在Runoob中搜索',
        //   frontUrl: 'https://www.runoob.com/?s=',
        // },
        // {
        //   title: '在Vue API中搜索',
        //   frontUrl: 'https://cn.vuejs.org/v2/api/#',
        // },
        // {
        //   title: '在Bing中搜索',
        //   frontUrl: 'https://cn.bing.com/search?q=',
        // },
        // {
        //   title: '通过百度搜索本站的',
        //   frontUrl: 'https://www.baidu.com/s?wd=site%3Ajx.alloy.ink%20',
        // },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  // [
  //   'demo-block',
  //   {
  //     // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
  //     settings: {
  //       // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
  //       // cssLib: ['http://xxx'], // 在线示例中的css依赖
  //       // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
  //       jsfiddle: false, // 是否显示 jsfiddle 链接
  //       codepen: true, // 是否显示 codepen 链接
  //       horizontal: false, // 是否展示为横向样式
  //     },
  //   },
  // ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  // [
  //   'vuepress-plugin-baidu-tongji', // 百度统计
  //   {
  //     hm: '0ac96a2a12ddd8164d711c19295b442e',
  //   },
  // ],
  // [
  //   'vuepress-plugin-comment', // 评论
  //   {
  //     choosen: 'gitalk',
  //     options: {
  //       clientID: 'ad571ce52e8350332999',
  //       clientSecret: 'a46a24ca633dce9725e7c5703e3d69353d6cc5d8',
  //       repo: 'gitalk-comment', // GitHub 仓库
  //       owner: 'ALLforJianXin', // GitHub仓库所有者
  //       admin: ['ALLforJianXin'], // 对仓库有写权限的人
  //       // distractionFreeMode: true,
  //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
  //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
  //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
  //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
  //       body:
  //         '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
  //     },
  //   },
  // ],
  [
    'vuepress-plugin-comment', // 评论
    {
      // 具体参数请看官网：https://valine.js.org/
      choosen: 'valine',
      // options 选项中的所有参数，会传给 Valine 的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'K9WhYbRoMssatveHE1HWSyOT-gzGzoHsz',
        appKey: 'XkMCm3pFLMbhpUJg9gUfojdr',
        placeholder: '请留下你的足迹 ~~',
        path: '<%- frontmatter.permalink %>',
        // 有 URL、''、mp、identicon、monsterid、wavatar、retro、robohash、hide 头像选择，具体头像是什么样子，请访问 https://valine.js.org/avatar.html
        avatar: 'mp',	// 默认头像
        pageSize: 30,   // 评论列表分页，每页条数
        visitor: false,    // 文章访问量统计
        recordIP: true,   // 是否记录评论者 IP
        enableQQ: false,   // 是否启用昵称框自动获取 QQ 昵称和 QQ 头像, 默认关闭
        meta: ['nick'], //仅要求昵称
        requiredFields: ['nick'], //仅要求昵称
      }
    }
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  // [
  //   'fulltext-search',
  //   {
  //     tokenize: 'full',
  //     split: /\s+/,
  //     encode: 'icase',
  //   },
  // ], // 全文搜索（有问题，不配参数会搜出多的，配了参数会OOM）
  [
    'cursor-effects',
    {
      size: 2, // size of the particle, default: 2
      //  shape: ['star' | 'circle'], // shape of the particle, default: 'star'
      shape: ['star'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
  ],
]
