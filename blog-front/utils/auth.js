import Session from './session'
const TokenKey = 'Admin-Token'
const UserInfoKey = 'userInfo'

export function getToken () {
  return Session.get(TokenKey)
}

export function setToken(token, time, expires) {
  return Session.set(TokenKey, token, time, expires)
}

export function removeToken() {
  return Session.remove(TokenKey)
}

export function getuserInfo() {
  return Session.get(UserInfoKey)
}