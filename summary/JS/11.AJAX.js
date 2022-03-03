//AJAX
// async JavaScript and XML(JSON)

const xhr = new XHLHttpRequest();

xhr.open('GET', '/xxx'); // 三个参数请求方式，请求地址，同步还是异步，默认异步
xhr.onload = () => {
  console.log('得到内容');
};
xhr.onerror = () => {};

xhr.send('{"name":"Mary"}'); // 请求体，GET请求体一般是空的，POST请求体一般是传一个JSON

// 最佳答案--
/* XMLHttpRequest.readyState属性返回一个XMLHttpRequest代理当前所处的状态
   0-4:  
   0:unsent 代理被创建但未调用open()方法  
   1:opened open()方法被调用
   2:headers_received  send()方法被调用，且头部和状态已可获取
   3.loading 下载中，responseText属性已经包含部分数据
   4.done 下载操作已完成
*/
const ajax = (method, url, data, success, fail) => {
  let request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (
        (request.status >= 200 && request.status < 300) ||
        request.status === 304
      ) {
        success(request);
      } else {
        fail(request);
      }
    }
  };
  request.send();
};
