## await-async-flow
将 async 库包装为使用 await 使用形式，在此基础上可以使用任何 async 库的方法

![npm](https://img.shields.io/npm/v/await-async-flow.svg)
![npm](https://img.shields.io/npm/dm/await-async-flow.svg)
![npm](https://img.shields.io/npm/l/await-async-flow.svg)

[![GitHub forks](https://img.shields.io/github/forks/JYFiaueng/await-async-flow.svg?style=social&label=Fork)](https://github.com/JYFiaueng/await-async-flow/fork)
[![GitHub stars](https://img.shields.io/github/stars/JYFiaueng/await-async-flow.svg?style=social&label=Star)](https://github.com/JYFiaueng/await-async-flow)

### Installation
```
npm install await-async-flow
```

### Example
```
const async = require('await-async-flow');
const sleep = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random().toFixed(2));
    }, t);
  });
};

const ret = await async.parallel({
  a: async () => {
    return await sleep(1000);
  },
  b: async () => {
    return await sleep(1000);
  }
});

// { a: '0.97', b: '0.94' }

// or

const ret = await async.map([200, 400, 600], async (t) => {
  return await sleep(t);
});

// [ '0.82', '0.45', '0.69' ]
```