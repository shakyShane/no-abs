#  [![Build Status](https://secure.travis-ci.org/shakyShane/no-abs.svg?branch=master)](http://travis-ci.org/shakyShane/no-abs)

> Don't allow absolute paths in require calls


## Install

```sh
$ npm install --save no-abs
```

## Usage

```js
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var noAbs  = require('./');

gulp.task('no-abs', function() {
    return gulp.src("test/fixtures/*.js")
        .pipe(noAbs())
        .pipe(jshint());
});
```


## License

MIT © [Shane Osbourne]()
