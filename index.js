const core = require('async');

module.exports = new Proxy(core, {
  get(target, name) {
    const async = function() {
      const args = arguments || [];
      return new Promise((resolve, reject) => {
        return core[name](...args, (err, result) => {
          if (err) return reject(err); 
          return resolve(result);
        });
      });
    }
    return async.bind(core);
  }
});