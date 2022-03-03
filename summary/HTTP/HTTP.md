**1.GET 和 POST 的区别**

**区别一：幂等性**（操作很多遍并不改变结果）

> 由于 GET 是读，POST 是写，所以：
> 1.GET 是幂等的，POST 不是幂等的； 2.用浏览器打开网页会发送 GET 请求，想要 POST 打开新页面要用 form 标签（ajax）；
> 3.GET 打开的页面刷新是无害的，POST 打开的页面刷新需要确认
> 4.GET 结果会被缓存，POST 结果不会被缓存
> 5.GET 打开的页面可以被书签收藏，POST 打开的不行

**区别二：请求参数**

> 1.通常，GET 请求参数放在 url 里，POST 请求数据放在 body（消息体）里。
> 2.GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息
> 3.GET 请求参数放在 url 里有长度限制，POST 放在 body 里没有长度限制。

**区别三：TCP packet**

> GET 产生一个 TCP 数据包；POST 产生两个或以上 TCP 数据包。

**2.HTTP 缓存有哪些方案？**

**3.HTTP 和 HTTPS 的区别有哪些？**
HTTPS = HTTP + SSL/TLS（安全层）

> 区别：
> 1.HTTP 是明文传输的，不安全；HTTPS 是加密传输的，非常安全；
> 2.HTTP 使用 80 端口，HTTPS 使用 443 端口；
> 3.HTTP 较快，HTTPS 较慢；
> 4.HTTPS 的证书一般需要购买（但也有免费的），HTTP 不需要证书。

**4.HTTP/1.1 和 HTTP/2 的区别有哪些？**

> 1.HTTP/2 使用了二进制传输，而且将 head 和 body 分成帧来传输；HTTP/1.1 是字符串传输。
> 2.HTTP/2 支持多路复用，HTTP/1.1 不支持。多路复用简单来说就是一个 TCP 连接从单车道（不是单行道）变成了几百个双向通行的车道。
> 3.HTTP/2 可以压缩 head，但是 HTTP/1.1 不行。
> 4.HTTP/2 支持服务器推送，但 HTTP/1.1 不支持。（实际上没多少人用）

**5.TCP 三次握手和四次挥手是什么？**
建立 TCP 连接时 server 与 client 会经历三次握手
浏览器向服务器发送 TCP 数据：SYN(seq=x)
服务器向浏览器发送 TCP 数据：ACK(seq=x+1) SYN(y)
浏览器向服务器发送 TCP 数据：ACK(seq=y+1)
关闭 TCP 连接时 server 与 client 会经历四次挥手
浏览器向服务器发送 TCP 数据：FIN(seq=x)
服务器向浏览器发送 TCP 数据：ACK(seq=x+1)
服务器向浏览器发送 TCP 数据：FIN(seq=y)
浏览器向服务器发送 TCP 数据：ACK(seq=y+1)

为什么 2、3 步骤不合并起来呢？
答案：2、3 中间服务器很可能还有数据要发送，不能提前发送 FIN。

**6.同源策略和跨域**
同源：如果两个 URL 的协议、端口和域名都完全一致的话，则这两个 URL 是同源的

> http://www.baidu.com/s
> http://www.baidu.com:80/ssdasdsadad
> http 默认端口 80，所以以上两个是同源。https 是 443

同源策略怎么做：
只要在 浏览器 中打开页面，就默认遵守同源策略

优点：保证用户的隐私安全和数据安全
缺点：很多时候前端需要访问另一个域名的后端接口，会被浏览器阻止其获取响应。
请求能发出，但响应会被浏览器屏蔽

怎么解决缺点：
使用跨域手段。
1.JSONP（改动比较小，但用户认证功能缺失，不支持 POST）
a.甲站点利用 script 标签可以跨域的特性，向乙站点发送 get 请求
b.乙站点后端改造 JS 文件的内容，将数据传进回调函数
c.甲站点通过回调函数拿到乙站点的数据
2.CORS 跨域名资源分享方案
a.对于简单请求，乙站点在响应头里添加 Access-Control-Allow-Origin: http://甲站点即可
b.对于复杂请求，如 PATCH，乙站点需要：
i.响应 OPTIONS 请求，在响应中添加如下响应头
Access-Control-Allow-Origin: http://甲站点
Access-Control-Allow-Methods: POST,GET,OPTIONS,PATCH
Access-Control-Allow-Headers: Content-Type
ii.响应 POST 请求，在响应中添加 Access——Control-Allow-Origin 头
c. 如果需要附带身份信息，JS 中需要在 AJAX 里设置 xhr.withCredentials = true.
3.Nginx 代理/Node.js 代理
a.前端=>后端=>另一个域名的后端
