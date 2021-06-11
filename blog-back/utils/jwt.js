const jwt = require('jsonwebtoken')
const SECRET= 'blog'

function Token(data) {
  const {username, id} = data.result[0]
  const t = jwt.sign(
    {username, id},  // 加密usertoken
    SECRET,
    {expiresIn: '2h'}
  )
  return t
}

module.exports = {
  Token
}