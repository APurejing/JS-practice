1.虚拟 DOM 的原理是什么？
在 React 中，render 执行的结果得到的并不是真正的 DOM 节点，结果仅仅是轻量级的 JavaScript 对象，我们称之为 virtual DOM。
虚拟 DOM 是 React 的一大亮点，具有 batching(批处理) 和高效的 Diff 算法。这让我们可以无需担心性能问题而” 毫无顾忌” 的随时“ 刷新” 整个页面，由虚拟 DOM 来确保只对界面上真正变化的部分进行实际的 DOM 操作。
http://www.alloyteam.com/2015/10/react-virtual-analysis-of-the-dom/

用来模拟 DOM 的一个对象，这个对象拥有一些重要属性，并且更新 UI 主要就是通过对比（DIFF）旧的虚拟 DOM 树和新的虚拟 DOM 树的区别完成的。
2.DOM diff 算法是怎样的？
https://imweb.io/topic/579e33d693d9938132cc8d94

3.React 有哪些生命周期钩子函数？数据请求放在哪个钩子里？
钩子在文档里，蓝色框框里面的都是生命周期钩子
把名字翻译一遍就是满分
要特别说明哪个钩子里请求数据，答案是 componentDidMount

4.React 如何实现组件间通信
父子靠 props 传函数
爷孙可以传两次 props
任意组件用 Redux（也可以自己写一个 eventBus）

如果父组件重新渲染但子组件不需要每次都重新渲染，可以用 useMemo
页面级别组件间通信可以用 React.Context 做应用状态管理，方便数据传递

5.Redux、ReduxThunk、ReduxSaga、dva、UmiJS 的区别和联系是什么？
Redux 是 JavaScript 状态容器，提供可预测化的状态管理。重点是『状态管理』。

6.什么是高阶组件？
要点：文档原话——高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。
举例：React-Redux 里 connect 就是一个高阶组件，比如 connect(mapState)(MyComponent) 接受组件 MyComponent，返回一个具有状态的新 MyComponent 组件。
