import request from '../api/request'

export function GET_BLOG_LIST() {
  return request({
    url: '/bloglist'
  })
}