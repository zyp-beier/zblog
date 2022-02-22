import { setToken, getToken } from "../../../utils/auth"
import {LOGIN} from '../../api/login'

const user = {
  state: {
    token: getToken(),
    uid: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_UID(state, uid) {
      state.uid = uid
    }
  },
  actions: {
    login({commit}, data) {
      return new Promise((resolve, reject) => {
        LOGIN(data).then(res => {
          if (res.status === 200) {
            let {id: uid } = res.result[0]
            commit('SET_TOKEN', res.token)
            commit('SET_UID', uid)
            setToken(res.token, res.time, res.expires)
            resolve(res)
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }

  }
}

export default user