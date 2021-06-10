import Session from './session'
const TokenKey = 'Admin-Token'

export function getToken () {
  return Session.get(TokenKey)
}

export function setToken(token) {
  return Session.set(TokenKey, token)
}

export function removeToken() {
  return Session.remove(TokenKey)
}