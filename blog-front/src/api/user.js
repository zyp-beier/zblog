import request from '@/api/request'

export function GET_USER_INFO() {
  return request({
    url: '/userinfo',
    method: 'get'
  })
}