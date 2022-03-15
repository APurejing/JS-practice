// 9.手写节流throttle、防抖debounce
const throttle = (fn, time) => {
  let isCding = false;
  return (...args) => {
    if (isCding) return;
    fn.call(undefined, ...args);
    isCding = true;
    setTimeout(() => {
      isCding = false;
    }, time);
  };
};

// 简洁版，删掉冷却中变量，直接用timer
const throttle = (fn, time) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      return;
    }
    fn.call(undefined, ...args);
    timer = setTimeout(() => {
      timer = null;
      x;
    }, time);
  };
};

const throwSkill = () => {
  console.log('放技能');
};

const advancedThrowSkill = throttle(throwSkill, 4000);

// 防抖（回城被打断）
const debounce = (fn, time) => {
  // 回城计时器backTime
  let backTime = null;
  return (...args) => {
    console.log('上个定时器存在吗--', backTime, backTime !== bull);
    if (backTime !== null) {
      clearTimeout(backTime); // 打断回城
    }
    // 重新回城
    backTime = setTimeout(() => {
      fn.call(undefined, ...args); // 回城后调用fn
      backTime = null;
    }, time);
  };
};
