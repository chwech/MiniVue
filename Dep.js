/**
 * 订阅者
 * @author chwech
 * @date 2019-06-29
 * @class Dep
 */
class Dep {
  constructor () {
    this.subs = [] // 存放Watcher对象
  }

  // 添加一个Watcher对象
  addSub (sub) {
    this.subs.push(sub)
  }

  // 通知所有Watcher对象更新视图
  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

Dep.target = null

// export default Dep
module.exports = {
  Dep
}