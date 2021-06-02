const router = require('koa-router')()
const { query } = require('../config/dbPOOL')
const {blog} = require ('../store/blog')


router.get('/bloglist', async (ctx, next) => {
  let data = await query('select * from posts')
  console.log(data)
  ctx.body = data
})



module.exports = router