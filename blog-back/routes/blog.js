const router = require('koa-router')()
const { query } = require('../config/dbPOOL')

// router.prefix('/blog')
router.get('/bloglist', async (ctx, next) => {
  let data = await query('select * from posts')
  ctx.body = data
})



module.exports = router