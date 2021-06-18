const router = require('koa-router')()
const {query} = require('../config/dbPool')
router.prefix('/userinfo')
router.get('/',  async (ctx, next) => {
  ctx.body = {
    name: '123',
    title: 234
  }
})

router.get('/userinfo/update', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
