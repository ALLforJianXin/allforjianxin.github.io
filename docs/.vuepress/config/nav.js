// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '文',
    link: '/post/',
    items: [
      { text: '短篇', link: '/post/' },
      { text: '完结文', link: '/post/' },
      { text: '连载中', link: '/post/' },
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
    text: '撰稿人',
    link: '/authors/',
  },
  { text: '关于', link: '/about/' },
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
