import request from '@/api/request'

export function fetchList() {
  return request({
    url: '/index',
    method: 'get'
  })
} 