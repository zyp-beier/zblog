module.exports = {
  proxyTable: {
    '/api': {
          target: 'http://127.0.0.1:8080',//设置你调用的接口域名和端口号
          changeOrigin: true,
          pathRewrite: {
                '^/api': ''
          }
    }
  }
}