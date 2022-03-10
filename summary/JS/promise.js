async function async1() {
  console.log('1');
  await async2();
  console.log('2');
}

async function async2() {
  console.log('3');
}

console.log('4');

setTimeout(function () {
  console.log('5');
}, 0);

async1(); // 调用1

new Promise(function (resolve) {
  console.log('6');
  resolve();
}).then(function () {
  console.log('7');
});

console.log('8');

// 1 3 2 4 5 6 7 8

// 4 6 8 1 3 2 7 5

console.log(1); // -

setTimeout(() => {
  // ---
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
  setTimeout(() => {
    console.log(9);
  }, 0);
}, 0);

new Promise((resolve, reject) => {
  console.log(4); // -
  resolve(5);
}).then((data) => {
  // --
  console.log(data);
});

setTimeout(() => {
  // ---
  console.log(6);
}, 0);

// 1 4 5 2 3 6

async function f2() {
  const a = await new Promise((resolve) => {
    // --
    setTimeout(() => {
      // --+
      console.log(2); // 1
      resolve(2);
    }, 0);
  });
  return a;
}

async function f3() {
  const b = await new Promise((resolve) => {
    setTimeout(() => {
      // --+
      console.log(3);
      resolve(3);
    }, 0);
  });
  return b;
}

async function f1() {
  console.log(1); // -
  await f2(); // --
  console.log(4);
  await f3(); // --
  console.log(5);
}

f1(); // -

console.log(6); // -

setTimeout(() => {
  // --+
  console.log(7);
}, 0);

new Promise((resolve) => {
  console.log(8); // -
  resolve();
}).then(() => {
  // --
  console.log(9);
});

console.log('9');
Promise.resolve(() => {
  console.log('10');
});

// 1 6 8 4 5 9 2 3 7 x
// 1 6 8 9 7 2 4 3 5
