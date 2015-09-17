var getPartials = require('get-assemble-partials');

var path = require('path');

module.exports = function (params, cb) {

  getPartials(params, function (err, partials) {
    if (err) {
      console.error(err);
    }

    var items = partials.map(function (partial) {
      var splited = partial.split(path.sep).slice(0, -1);

      return splited.join(path.sep);
    });

    var dirs = items.filter(function (item, idx) {
      return items.indexOf(item) === idx;
    });

    cb(null, dirs);
  });

};
