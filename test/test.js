const async = require('../index');

const sleep = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random().toFixed(2));
    }, t);
  });
};

describe('test await-async-flow', async function () {

  it('run parallel setTimeout', async function () {
    const ret = await async.parallel({
      a: async () => {
        return await sleep(1000);
      },
      b: async () => {
        return await sleep(1000);
      }
    });
  });

  it('run map setTimeout', async function () {
    const ret = await async.map([200, 400, 600], async (t) => {
      return await sleep(t);
    });
  });

});