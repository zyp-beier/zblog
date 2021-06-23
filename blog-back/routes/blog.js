const router = require('koa-router')()
const { query } = require('../config/dbPOOL')

router.get('/bloglist', async (ctx, next) => {
  let data
  if (ctx.query && ctx.query.queryData) {
    let {queryData} = ctx.query
    data = await query(`SELECT * FROM posts WHERE title LIKE '%${queryData}%' || content LIKE '%${queryData}%'`)
  } else {
    data = await query('SELECT * FROM posts')
  }
  ctx.body = data
})

module.exports = router