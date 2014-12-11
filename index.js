var through     = require("through2");
var gutil       = require('gulp-util');
var PluginError = gutil.PluginError;

const regex = new RegExp(' require\\((\'|")/');
const PLUGIN_NAME = 'gulp-no-abs';

module.exports = function () {
    return through.obj(function (file, enc, next) {
        if (file._contents && file._contents.toString().match(regex)) {
            console.log("Absolute path detected in: " + file.path);
            throw new PluginError(PLUGIN_NAME, 'Absolute path detected!');
        }
        this.push(file);
        next();
    })
};
