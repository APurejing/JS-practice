1. BFC 是什么
   - 是什么：块级格式化上下文（千万别解释）
   - 触发条件：
     - 浮动元素（元素的 float 不是 none
     - 绝对定位元素（元素的 position 为 absolute 或 fixed）
     - 行内块 inline block 元素
     - overflow 值不为 visible 的块元素
     - 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
   - 解决了什么问题：
     - 防止 margin 合并（垂直方向的 div margin 会合并，只要一个 div 变成 BFC 就不会合并）
     - 清除浮动（一般不用，用.clearfix）
     - 某些古老的布局方式会用到（已过时）

---

2. 如何实现垂直居中（七种方式）建议写博客，问到直接给链接

   - 如果.parent 的 height 不写，只需要 padding：10px 0；就能将.child 垂直居中
   - 如果.parent 的 height 不写，就很难把.child 居中
   - 忠告：能不写 height 就不写 height

   - 1. table 自带功能
   - 2. div 装成 table
   - 3. 100% 高度的 after before 加上 inline block （这个方法还有一个优化版本）
   - 4. margin-top-50%
   - 5. translate-50%
   - 6. absolute margin auto
   - 7. flex
   - 8. 还有其他方法自己搜

---

3. CSS 选择题优先级如何确定（建议写博客总结，网上搜一下）
   - 选择器越具体，优先级越高
   - 相同优先级，出现在后面的覆盖前面的
   - 属性后面加!important 的优先级最高，但要少用

---

4. 如何清除浮动 （建议写博客总结）
   - 方法一：给父元素加上.clearfix

```
  .clearfix:after{
    content: '';
    display: block; /*或者 table*/
    clear: both;
  }
```

- 方法二：给父元素加上 overflow:hidden
  - （现在都不用，直接用 flex）

---

5. 两种盒模型（box-sizing）的区别
   - 第一种盒模型：content-box
     > width 指定的是 content 区域宽度，而不是实际宽度
     > 实际宽度 = width + padding + border
   - 第二种盒模型：border-box，即 width 指定的是左右边框外侧的距离（ IE 浏览器最初的盒模型）
     > 实际宽度 = width
