const router = require('koa-router')()
const { query } = require('../config/dbPOOL')


router.prefix('/label')
router.get('/list', async (ctx, next) => {
  let data = await query('SELECT * FROM labelList')
  ctx.body = data
})

module.exports = router