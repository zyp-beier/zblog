import request from '../api/request'

//获取博客列表 & 搜索博客
export function GET_BLOG_LIST(data) {
  return request({
    url: '/bloglist',
    params: data
  })
}

export function CREATE_BLOG() {
  return request ({
    url: '/blog/create'
  })
}