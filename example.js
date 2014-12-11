var fs     = require('vinyl-fs');
var noAbs  = require('./');

fs.src("test/fixtures/*.js")
    .pipe(noAbs());