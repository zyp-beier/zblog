const router = require('koa-router')()
const { query } = require('../config/dbPOOL')
const {rename} = require('fs/promises')
const path = require('path')
const moment = require('moment')


router.prefix('/label')

router.get('/list', async (ctx, next) => {
  let id = ctx.query && ctx.query.id
  let data
  if(id) {
    data = await query(`SELECT * FROM labelList WHERE id=${id}`)
  } else {
    data = await query('SELECT * FROM labelList')
  }
  ctx.body = data
})

router.post('/create', async(ctx, next) => {
  let { files, body } = ctx.request
  const file = files && files.file
  const label = body.label
  const fileName = `${new Date().getTime()}` + `${file.name}`
  // 创建路径
  let filePath = path.join(__dirname, '../public/upload/') + fileName
  try {
    await rename(file.path, filePath)
    let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    let data = await query(`INSERT INTO labelList (createTime, icon, label, number) VALUES ('${date}', '${fileName}', '${label}', 0)`)
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

router.post('/remove', async(ctx) => {
    let body = ctx.request.body
    let data = await query(`DELETE FROM labelList WHERE id=${parseInt(body.labelId)}`)
    if (data.status === 200) {
      ctx.body = {
        status: 200,
        message: '删除成功'
      }
    }

})

module.exports = router