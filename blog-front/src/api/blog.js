import request from '../api/request'

export function GET_BLOG_LIST() {
  return request({
    url: '/bloglist'
  })
}
export function GET_LABEL_LIST() {
  return request({
    url: '/labellist'
  })
}

export function CREATE_BLOG() {
  return request ({
    url: '/blog/create'
  })
}