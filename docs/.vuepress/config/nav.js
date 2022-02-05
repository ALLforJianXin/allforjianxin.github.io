// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '文',
    link: '/post/',
    items: [
      {
        text: '连载中',
        link: '/post/#连载中',
        items: [
          { text: '芙蓉绽', link: '/pages/32ac05/' },
          { text: '关山难越', link: '/pages/751f20/' },
        ],
      },
      {
        text: '短篇', link: '/post/#短篇',
        items: [
          { text: '2022', link: '/post/#短篇-2022' },
          { text: '2021', link: '/post/#短篇-2021' },
          { text: '2020', link: '/post/#短篇-2020' },
          { text: '2019', link: '/post/#短篇-2019' },
        ],
      },
      {
        text: '已完结', link: '/post/#已完结',
        items: [
          { text: '无寄', link: '/pages/491055/' },
          { text: '潜龙勿用', link: '/pages/105ad6/' },
          { text: '黑择明', link: '/pages/cc5dfb/' },
          { text: '如昨', link: '/pages/760113/' },
          { text: '聘狸奴', link: '/pages/628240/' },
          { text: '长日为亘', link: '/pages/e8827c/' },
          { text: '不见子都', link: '/pages/82bec3/' },
          { text: '迷魂记', link: '/pages/3a464a/' },
          { text: '其实是个纨绔', link: '/pages/b29276/' },
          { text: '我执', link: '/pages/74fa18/' },
          { text: '不老梦', link: '/pages/17c160/' },
        ],
      },
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
    text: '嗑学',
    link: '/research/',
    items: [
      { text: '糖渣合集', link: '/research/#糖渣合集' },
      { text: '非主流戬心人', link: '/pages/a85947/' },
      { text: '嗑学分析', link: '/research/#嗑学分析' },
      { text: '扩展考据', link: '/research/#扩展考据' },
    ],
  },
  {
    text: '专栏',
    items: [
      // { text: '我闻', link: '/iheard/' },
      { text: '戬心双情人节48h', link: '/202202/48h/' },
    ],
  },
  {
    text: '推荐',
    link: '/recommend/',
    items: [
      { text: '最近更新', link: '/recent/' },
      { text: '个人推荐', link: '/recommend/#个人推荐' },
      { text: '编辑推荐', link: '/recommend/#编辑推荐' },
    ],
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
