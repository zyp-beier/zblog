const router = require('koa-router')()
const {blog} = require ('../store/blog')


router.get('/bloglist', (ctx, next) => {
  ctx.body = blog
})



module.exports = router