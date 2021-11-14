// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '文',
    link: '/post/',
    items: [
      { text: '短篇', link: '/post/#短篇' },
      { text: '已完结', link: '/post/#已完结' },
      { text: '连载中', link: '/post/#连载中' },
    ],
  },
  {
    text: '画',
    link: '/image/',
  },
  {
    text: '视频',
    link: '/video/',
  },
  {
    text: '考据',
    link: '/research/',
  },
  {
    text: '其他',
    items: [
      { text: '团队', link: '/authors/', },
      { text: '工作手册', link: '/workbook/', },
      { text: '关于', link: '/about/' },
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
