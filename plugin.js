var getPartialDirs = require('./index.js');

module.exports = function (params, cb) {

  getPartialDirs(params, function (err, data) {
    console.log(data);
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
