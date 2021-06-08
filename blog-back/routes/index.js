const router = require('koa-router')()
const { query } = require('../config/dbPOOL')

router.get('/index', async (ctx, next) => {
  let data = await query('SELECT * FROM pageviews')
  ctx.body  = data
})

module.exports = router
