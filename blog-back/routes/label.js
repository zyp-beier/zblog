const router = require('koa-router')()
const { query } = require('../config/dbPOOL')
const {rename} = require('fs/promises')
const path = require('path')
const moment = require('moment')


router.prefix('/label')

router.get('/list', async (ctx, next) => {
  let data = await query('SELECT * FROM labelList')
  ctx.body = data
})

router.post('/create', async(ctx, next) => {
  const file = ctx.request.files.file
  console.log(ctx)
  const fileName = `${new Date().getTime()}` + `${file.name}`
  // 创建路径
  let filePath = path.join(__dirname, '../public/upload/') + fileName
  try {
    await rename(file.path, filePath)
    let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    let data = await query(`INSERT INTO labelList (createTime, icon, label, number) VALUES ('${date}', '${fileName}', '${file.name}', 0)`)
    console.log('data', data)
    if (data.status === 200) {
      ctx.body = {
        status: 200,
        message: '上传成功'
      }
    }
  } catch (error) {
    ctx.body = {
      status: 0,
      message: error.message
    }    
  }
})

module.exports = router