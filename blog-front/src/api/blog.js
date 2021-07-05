import request from '../api/request'

//获取博客列表 & 搜索博客
export function GET_BLOG_LIST(data) {
  return request({
    url: '/bloglist',
    params: data
  })
}

export function CREATE_BLOG(data) {
  return request ({
    url: '/blog/create',
    method: 'post',
    data
  })
}

// 获取博客详情
export function GET_BLOG_DETAIL(blogId) {
  return request({
    url: '/blog/detail',
    params: {
      blogId,
    }
  })
}

// 删除博客
export function REMOVE_BLOG(blogId) {
  return request({
    url: '/blog/remove',
    method: 'delete',
    params: {
      blogId
    }
  })
}