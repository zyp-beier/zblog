export default Session = {
  set(key, value='', expires={expires: ''}) {
    if (key) {
      const _data = JSON.stringify({value: value, ...expires})
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
      //有设置过期时间
      if (item.expires) {
        // 获取当前时间
        const _date = new Date().getTime()
        // 还没过期
        if (Number(item.expires) - _date > 0) {
          return item.value
        } else {
          // 已过期
          sessionStorage.removeItem(key)
          return null
        }
      } else {
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