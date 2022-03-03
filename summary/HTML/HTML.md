1. HTML 中的语义化标签
   - 1. 是什么：语义化标签是一种写 HTML 标签的方法论/方式
   - 2. 怎么做：实现方法是，遇到标题就用 h1-h6，遇到段落用 p，遇到文章用 article，主要内容用 main，边栏用 aside，导航用 nav...（就是找到中文对应的英文）
   - 3. 解决了什么问题：明确了 HTML 的书写方法论
   - 4. 优点：一、适合搜索引擎检索；二、适合人类阅读，利于团队维护。
   - 5. 缺点：没有

- 总结：「是什么，怎么做，解决了什么问题，优点，缺点，怎么解决缺点」

2. HTML5 有哪些新标签

   - 不要提自己不熟悉的标签，很可能成为下一道题。说一两个就好
   - 文章相关：header，main，nav，section，article。。。
   - 多媒体相关：video，audio，svg，canvas
   - 表单相关：（input 标签用到道）type=email，type=tel

3. Canvas 和 SVG 的区别是什么（第 2 题的延伸，不同点答出两个即可）
   - 1. Canvas 是用笔刷绘制 2D 图形的
   - 2. SVG 主要是用标签绘制不规则矢量图
   - 相同：都是主要画 2D
   - 不同：Canvas 画的是位图，SVG 画的是矢量图
   - 不同：SVG 节点过多时渲染慢，Canvas 性能更好一点，但写起来更复杂
   - 不同：SVG 支持分层和事件，Canvas 不支持，但可以用库实现