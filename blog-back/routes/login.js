const router = require('koa-router')()
const { query } = require('../config/dbPool')
const {Token} = require('../utils/jwt')

router.post('/login', async (ctx, next) => {
  const {username, password} = ctx.request.body
  let data = await query(`SELECT * FROM users WHERE username='${username}';`)

  if (!data.result.length) {
    console.log('用户名不存在')
    ctx.body = {
      message: '用户名不存在'
    }
  } else if (data.result[0].password === password) {
    console.log('登录成功')
    let token = Token(data)
    ctx.body = {
      message: '登录成功',
      status: 200,
      token,
      time: new Date().getTime(),
      expires: 7200000
    }
  } else if (data.result[0].password != password) {
    console.log('密码错误')
    ctx.body = '密码错误'
  } else {
    console.log('登录失败')
    ctx.body = '登录失败'
  }
})


module.exports = router