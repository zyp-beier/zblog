const router = require('koa-router')()
const { query } = require('../config/dbPOOL')
const path = require('path')
const { rename } = require('fs')
const moment = require('moment')

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

router.post('/blog/create', async (ctx, next) => {
  let request = ctx.request
  let {title, label, blogContent} = request.body
  let coverImg = request.files.coverImg
  const fileName = `${new Date().getTime()}` + coverImg.name
  // 创建路径
  let filePath = path.join(__dirname, '../public/coverImg/') + fileName
  try {
    await rename(coverImg.path, filePath, function() {})
    let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    let data = await query(`INSERT INTO posts (title, content, create_at, label,coverImg, pageView) VALUES ('${title}', '${blogContent}','${date}', '${label}','${filePath}', 0)`)
    console.log(data)
    if (data.status === 200) {
      ctx.body = {
        status: 200,
        message: '上传成功'
      }
    }
  } catch (err) {
    ctx.body = {
      status: 0,
      message: err.message
    }
  }

})

module.exports = router