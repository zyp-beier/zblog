const router = require('koa-router')()
const {userInfo} = require('../store/user')

router.prefix('/userinfo')
router.get('/',  async (ctx, next) => {
  ctx.body = userInfo
})

router.get('/userinfo/update', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
