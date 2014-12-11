#no-abs [![Build Status](https://secure.travis-ci.org/shakyShane/no-abs.svg?branch=master)](http://travis-ci.org/shakyShane/no-abs)

> Don't allow absolute paths in require calls

It's just a simple regex that looks for ` require("/` in files - don't use it if you need anything
more robust that than.

It was created to stop myself pushing code that was using absolute paths on my machine - it's not
designed to be any kind of comprehensive check/test, so use with caution.

## Install

```sh
$ npm install --save no-abs
```

## Usage

```js
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var noAbs  = require('no-abs');

gulp.task('no-abs', function() {
    return gulp.src("test/fixtures/*.js")
        .pipe(noAbs())
        .pipe(jshint());
});
```


## License

MIT © [Shane Osbourne]()
