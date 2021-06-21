const router = require('koa-router')()
const { query } = require('../config/dbPOOL')


router.prefix('/label')
router.get('/list', async (ctx, next) => {
  let data = await query('SELECT * FROM labelList')
  ctx.body = data
})
router.post('/create', async(ctx, next) => {
    // console.log(ctx)
    console.log(ctx.request.body)

})

module.exports = router