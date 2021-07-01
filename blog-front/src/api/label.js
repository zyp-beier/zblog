import request from '../api/request'

export function GET_LABEL_LIST(id = '') {
  return request({
    url: '/label/list',
    params: {
      id,
    }
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