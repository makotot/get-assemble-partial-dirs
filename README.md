# get-assemble-partial-dirs

[![npm version](http://img.shields.io/npm/v/get-assemble-partial-dirs.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-dirs)
[![travis](http://img.shields.io/travis/makotot/get-assemble-partial-dirs.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-dirs)
[![dependencies](http://img.shields.io/david/makotot/get-assemble-partial-dirs.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-dirs)
[![devDependencies](http://img.shields.io/david/dev/makotot/get-assemble-partial-dirs.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-dirs)
[![License](http://img.shields.io/npm/l/get-assemble-partial-dirs.svg?style=flat-square)](https://github.com/makotot/get-assemble-partial-dirs)

> Get [assemble](http://assemble.io/) partial directories


## Install

```sh
$ npm i --save get-assemble-partial-dirs
```


## Usage

In assemble plugin:
```js
var getPartialDirs = require('get-assemble-partial-dirs');

module.exports = function (params, cb) {

  getPartialDirs(params, function (err, data) {
    console.log(data);
    // => [ 'src/partials', 'src/sub-partials', ... ]
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
```


## License

MIT

