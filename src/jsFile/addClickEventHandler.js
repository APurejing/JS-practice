// 先拿到目标元素
const targetEle = document.getElementById('box');
console.log('目标元素--', targetEle);
//  监听目标元素的点击事件
targetEle.addEventListener('click', function (event) {
    console.log('点击事件发生了，浏览器给的事件对象--', event);
    console.log('点击事件发生的元素--', event.target, event.target.classList);
    console.log('监听器所在的元素--', event.currentTarget);
    // 如果event.target的classList上，有greenInnerBox类名，那么移除greenInnerBox
    //  如果没有，那么添加
    event.target.classList.toggle('greenInnerBox');
})