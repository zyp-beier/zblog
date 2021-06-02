import request from '../api/request'

export function GET_LABEL_LIST() {
  return request({
    url: '/label/list'
  })
}