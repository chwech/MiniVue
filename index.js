// import Dep from "./Dep";
// import Watcher from "./Watcher";
const Dep = require('./Dep').Dep
const Watcher = require('./Watcher').Watcher

function defineReactive (obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      dep.addSub(Dep.target) // 收集依赖
      return val
    },
    set: function reactiveSetter (newVal) {
      if (newVal === val) return
      // updateView(newVal) // 渲染视图
      dep.notify()
    }
  })
}

/**
 * 对数据进行响应式化
 * @author chwech
 * @date 2019-06-29
 * @param {object} value
 */
function observer (value) {
  if (!value || typeof value !== 'object') {
    return
  }

  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

class MiniVue {
  constructor (options) {
    this._init(options)
  }

  _init (options) {
    this._data = options.data

    // 响应式化数据
    observer(this._data)

    // 新建一个观察者对象，这时Dep.target指向这个对象
    new Watcher()

    // 模拟render过程，此时需要获取视图渲染的数据，触发getter函数收集依赖
    console.log(this._data.test)
  }
}

let vm = new MiniVue({
  data: {
    test: '123'
  }
})

vm._data.test = 'hello world'
