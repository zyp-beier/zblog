const blog = {
  totalPage: 70,
  pageSize: 15,
  current: 1,
  blogList: [
    {
      id: 1,
      title: 'javascript从入门到放弃',
      coverImg: 'img',
      content: '<div>这就是这就是content</div>',
      createTime: '1622167512',
      label: 'javascript',
      viewPage: 45
    },
    {
      id: 2,
      title: 'php是世界上最好的语言',
      coverImg: 'image',
      content: '<span>PHP之所以被称为世界上最好的语言</span>',
      createTime: '1622167514',
      label: 'javascript',
      viewPage: 45
    },
    {
      id: 3,
      title: 'node由浅入深',
      coverimg: 'imgimg',
      content: '<span>这是什么诺娜撒旦的女儿</span>',
      createTime: '1622167545',
      label: 'javascript',
      viewPage: 45
    }
  ]
}


module.exports = {
  blog
}