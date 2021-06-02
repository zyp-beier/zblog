const mysql = require('mysql');
const mysqlConfig = require('./db')

let pools = {}

//创建连接池
//判断是否存在连接池，不用每次都创建
if (!pools.hasOwnProperty('data')) {
  pools['data'] = mysql.createPool({
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    user: mysqlConfig.username,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    insecureAuth: true
  })
}

//查询
const query = (sql, values) => {
  return new Promise((res,rej) => {
    pools['data'].getConnection((err, connection) => {
      if (err) {
        console.error("database connect err, ", err);
        process.exit(-1)
      }
      console.log('database connect successful!')

      connection.query(sql, values, (err,result) => {
        if (err) {
          rej(err)
        }
        connection.release()
        res({
          status: 200,
          result
        })
      })
    })
  })
}

module.exports = {
  query
}