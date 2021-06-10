const router = require('koa-router')()
const { query } = require('../config/dbPool')

router.post('/login', async (ctx, next) => {
  const {username, password} = ctx.request.body
  let data = await query(`SELECT * FROM users WHERE username='${username}';`)
  console.log(data)
  if (!data.result.length) {
    console.log('用户名不存在')
  } else if (data.result[0].password === password) {
    console.log('登录成功')
  } else if (data.result[0].password != password) {
    console.log('密码错误')
  } else {
    console.log('登录失败')
  }
  ctx.body = data
})


module.exports = router