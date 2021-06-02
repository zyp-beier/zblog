const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// const mysql = require('mysql')
// const mysqlConfig = require('./config/db');
const index = require('./routes/index')
const user = require('./routes/user')
const blog = require('./routes/blog')
const label = require('./routes/label')

// const mysqlPool = mysql.createPool({
//   host: mysqlConfig.host,
//   port: mysqlConfig.port,
//   user: mysqlConfig.username,
//   password: mysqlConfig.password,
//   database: mysqlConfig.database,
//   insecureAuth: true
// })

// mysqlPool.getConnection(function (err, connection) {
//   if (err) {
//     console.error("database connect err, ", err);
//     process.exit(-1);
//   }
//   console.info("database connect successful!")

//   const sql = "select * from posts";
//   connection.query(sql, null, function (err, rows) {
//     if (err) {
//       console.log('query failed');
//       return
//     }
//     console.log('rows', rows);
//   });
// });

onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(index.routes(), index.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())
app.use(label.routes(), label.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
