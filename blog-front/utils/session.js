export default {
  set(key, value='', time, expires) {
    if (key) {
      const _data = JSON.stringify({value, time, expires})
      sessionStorage.setItem(key, _data)
    } else {
      throw new Error('key 不能为空')
    }
  },
  get(key) {
    let item = sessionStorage.getItem(key)
    try {
      // json 转为对象的形式
      item = JSON.parse(item)
    } catch (err) {
      item = null
    }
    if (item) {
      if (item.expires && item.time) {
        const _date = new Date().getTime()
        const oldDate = item.time
        if (_date - oldDate < Number(item.expires)) {
          // 还没过期
          return item.value
        } else {
          // 已过期
          console.log('已过期')
          sessionStorage.removeItem(key)
          return null
        }
      } else {
        sessionStorage.removeItem(key)
        return item.value || null
      }
    } else {
      return item
    }
  },
  // 删除
  remove(key) {
    sessionStorage.removeItem(key)
  },
  // 清除全部
  clear() {
    sessionStorage.clear()
  }
}