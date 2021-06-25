const router = require('koa-router')()
const { query } = require('../config/dbPOOL')

router.get('/bloglist', async (ctx, next) => {
  let data
  if (ctx.query) {
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

router.get('/blog/detail', async (ctx, next) => {
  let data
  let blogId = ctx.query.blogId || ''
  if(blogId) {
    data = await query(`SELECT * FROM posts WHERE id=${blogId}`)
  }
  ctx.body = data
})

module.exports = router