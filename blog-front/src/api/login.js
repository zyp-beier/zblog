import request from '@/api/request';

export function LOGIN(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}