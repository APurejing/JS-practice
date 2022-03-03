1. 简述 DOM 事件模型
   先经历从上到下的捕获阶段，再经历从下到上的冒泡阶段。
   addEventListener('click', fn, trun/false)第三个参数可以选择阶段。
   true 捕获阶段，false 或者不写默认 冒泡阶段
   可以使用 event.stopropagation()来阻止捕获或冒泡。

2. 手写事件委托
   错误版但可能能通过面试：

   > ul.addEventListener('click,function(e) {
   > if(e.target.tagName.toLowerCase() === 'li'){
   > fn()}})
   > bug 在于，如果用户点击的是 li 里面的 span，就没法触发 fn
   > 好处：1. 节省监听器 2. 实现动态监听
   > 坏处：调试比较复杂，不容易确定监听者。
   > 注意区分 e.target 点击触发的元素 e.currenttarget 监听的元素

3. 手写拖拽 div
   注意监听范围，不能只监听 div
   不要使用 drag 事件，很难用。
   使用 transform 会比 top / left 性能更好，因为可以避免 reflow 和 repaint
