// import Dep from "./Dep";
const Dep = require('./Dep').Dep

class Watcher {
  constructor () {
    Dep.target = this
  }

  update () {
    console.log('视图更新啦')
  }
}

// export default Watcher
module.exports = {
  Watcher
}