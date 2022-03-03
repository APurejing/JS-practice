// 10.手写发布订阅（写博客，甩链接）
// 两事件不直接交流，通过一个接口（这里设置为eventHub）完成发布订阅
const eventHub = {
  // 套路方法记住即可
  // 放一个空数组，在外面或函数内部放都可以，放里面好看一点
  // queue: [],多个数组和name对应，映射，需要一个hash表（队列的表），用{}
  queueMap: {
    // click:[f1,f2]
  },
  // on接收两个参数：事件类型 name， 函数fn，没有人关心返回值。如果接收到一个事件，就把它放到任务队列里面
  on: (name, fn) => {
    // 入队
    // if(eventHub.queueMap[name] === undefined){
    //   eventHub.queueMap[name] = [];
    // }
    eventHub.queueMap[name] = eventHub.queueMap[name] || []; // 如果为空即初始化队列，如果不为空取name
    eventHub.queueMap[name].push(fn);
    // return undefined; 删掉
  }, // 在后面任何一个地方使用on监听一个事件
  emit: (name, data) => {
    const q = eventHub.queueMap[name];
    if (!q) {
      return;
    }
    q.map((f) => f(data));
    return undefined;
  }, // 也有地方叫trigger。触发事件
  off: (name, fn) => {
    // 找到队列，把fn从队列里删除
    // 重复使用的evevtHub.queueMap[name]使用alias设计模式缩写简短，别名只用读，不用在写的操作里,容易出现引用问题
    const q = eventHub.queueMap[name];
    if (!q) {
      return;
    }
    const index = q.indexOf(fn);
    // 如果没找到fn，直接返回
    if (index < 0) {
      return;
    }
    q.splice(index, 1); //???
  } // 取消监听事件
};

eventHub.on('click', console.log); // f1
eventHub.on('click', console.error); // f2
eventHub.off('click', f1);

setTimeout(() => {
  eventHub.emit('click', 'Mary');
}, 3000);


用 class 实现。

class EventHub {
  map = {}
  on(name, fn) {
    this.map[name] = this.map[name] || []
    this.map[name].push(fn)
  }
  emit(name, data) {
    const fnList = this.map[name] || []
    fnList.forEach(fn => fn.call(undefined, data))
  }
  off(name, fn) {
    const fnList = this.map[name] || []
    const index = fnList.indexOf(fn)
    if(index < 0) return
    fnList.splice(index, 1)
  }
}
// 使用
const e = new EventHub()
e.on('click', (name)=>{
  console.log('hi '+ name)
})
e.on('click', (name)=>{
  console.log('hello '+ name)
})
setTimeout(()=>{
  e.emit('click', 'frank')
},3000)