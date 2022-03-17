const ajax = (method, url, data, success, fail) => {
  let xhr = XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        success(xhr);
      } else {
        fail(xhr);
      }
    }
  };
  xhr.send();
};
