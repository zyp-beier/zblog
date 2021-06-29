const router = require('koa-router')()
const { query } = require('../config/dbPool')
const {Token} = require('../utils/jwt')

router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body)
  const {username, password} = ctx.request.body
  let data = await query(`SELECT * FROM users WHERE username='${username}';`)
  let status = 0
  let message = ''
  if (!data.result.length) {
    message= '用户名不存在'
  } else if (data.result[0].password === password) {
    status= 200
  } else if (data.result[0].password != password) {
    message = '密码错误'
  } else {
    message = '登录失败'
  }
  if (status === 200) {
    let token = Token(data)
    ctx.body = {
      message: '登录成功',
      ...data,
      token,
      time: new Date().getTime(),
      expires: 7200000
    }
  } else {
    ctx.body = {
      status: 401,
      message
    }
  }
})


module.exports = router