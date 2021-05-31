import axios from "axios"

// create an axios instance
const service =  axios.create({
  // baseURL: process.env.BASE_API,
  baseURL: '/',
  timeout: 10000,
  // withCredentials: true   //需要登录权限的要带cookie
})


// request interceptor
service.interceptors.request.use(config => {
  // 修正method
  if (config.method) {
    config.method = config.method.toLocaleLowerCase()
  } else {
    config.method = 'get'
  }
  // 请求添加token
  // if (store.getters.token) {
  //   config.headers['Authorization'] = getToken()
  // }
  if (config.method === 'post') { // post 请求
    //  临时添加
    if (config.url === '/auth/login') {
      // 加密
      // config.data = toEncryptParams(config.data)
      return config
    }
  } else {
    // get请求
    return config
  }
}, error => {
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.code) {
      return res
    } else {
      return Promise.reject(res)  
    }
  },
  error => {
    let msg = error.message
    if (msg === 'Network Error') {
      msg = '网络错误,请检查网络连接'
    }
    if (msg.indexOf('timeout') >= 0) {
      msg = '请求超时,请重新操作'
    }
    return Promise.reject(error)
  }
)

export default service