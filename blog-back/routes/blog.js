const router = require('koa-router')()
const { query } = require('../config/dbPOOL')

// router.prefix('/blog')
router.get('/bloglist', async (ctx, next) => {
  let data = await query('SELECT * FROM posts')
  ctx.body = data
})

router.get('/labellist', async (ctx, next) => {
  let data = await query('SELECT * FROM labelList')
  ctx.body = data
})

module.exports = router