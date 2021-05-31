const router = require('koa-router')()
const {index} = require('../store/index')

router.get('/index', async (ctx, next) => {
  ctx.body = index
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
