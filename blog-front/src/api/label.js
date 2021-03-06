import request from '../api/request'

export function GET_LABEL_LIST() {
  return request({
    url: '/label/list',
  })
}
// 创建标签
export function CREATE_LABEL(data) {
  return request({
    url: '/label/create',
    method: 'post',
    data,
  })
}

// 删除标签
export function REMOVE_LABEL(data) {
  return request({
    url: '/label/remove',
    method: 'post',
    data
  })
}