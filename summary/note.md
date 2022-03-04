前端单页面应用的路由有两种模式：

- hash 模式和 history 模式
- hash 模式的 url 后面会加上#
- history 模式是使用 html5 的 history 对象来完成的，常用的三个方法：history.go(n)，history.back(),history.forward()
- history 还有添加一条路由历史记录的方法：history.pushState()\*

hash 路由优缺点：

- 优点

  - 实现简单，兼容性好（兼容到 IE8）
  - 绝大多数前端框架均提供了给予 hash 的路由实现
  - 不需要服务器端进行任何设置和开发
  - 除了资源加载和 ajax 请求以外，不会发起其他请求

- 缺点
  - 对于部分需要重定向的操作，后端无法获取 hash 部分内容，导致后台无法取得 url 的数据，典型例子：微信公众号的 oauth 验证
  - 服务器端无法准确跟踪前端路由信息

History(browser)路由优缺点：

- 优点：

  - 对于重定向过程中不会丢失 url 中的参数，后端可以拿到这部分数据
  - 绝大多数前端框架均提供了 browser 的路由实现
  - 后端可以准确跟踪路由信息
  - 可以使用 history.state 来获取当前 url 对应的状态信息

- 缺点
  - 兼容性不如 hash 路由（只兼容到 IE10）
  - 需要后端支持，每次返回 html 文档

navigate 导航 <nav></nav>

devDependencies 开发时的依赖，装的是一些辅助的库
dependencies 生产的依赖，一般是应用的核心库，应用运行必须用到这些库的代码

声明式导航：不用写额外的方法，直接使用 Link 标签进行页面跳转
编程式导航：使用 react-router-dom 中的对象进行页面跳转（对象上有很多方法）

日常开发过程：确定应用有哪些页面->根据页面进行路由配置->写各路由对应组件

nested routes 嵌套路由

js 对象的深浅拷贝

The source code is the code that we ll write and edit. The distribution code is the minimized and optimized output of our build process that the browser will display.

源代码是我们将要编写和编辑的代码。分发代码是浏览器将显示的构建过程的最小化和优化的输出。
