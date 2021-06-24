const router = require('koa-router')()
const { query } = require('../config/dbPOOL')

router.get('/bloglist', async (ctx, next) => {
  let data
  if (ctx.query) {
    console.log(ctx.query)
    if (ctx.query.queryData) {
      let { queryData } = ctx.query
      data = await query(`SELECT * FROM posts WHERE title LIKE '%${queryData}%' || content LIKE '%${queryData}%'`)
    } else if (ctx.query.labelData) {
      let { labelData } = ctx.query
      data = await query(`SELECT * FROM posts WHERE label='${labelData}'`)
    } else {
      data = await query('SELECT * FROM posts')
    }
  }
  ctx.body = data
})

module.exports = router