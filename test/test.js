var assert = require('chai').assert;
var noAbs  = require('../');
var fs     = require('vinyl-fs');
var File  = require('vinyl');
describe('no-abs node module', function () {
    it('throws if absolute path found', function () {
        assert.throws(function () {
            var stream = noAbs();
            stream.write(new File({
                cwd: "/",
                base: "/test/",
                path: "/test/file.js",
                contents: new Buffer(" require('/users/shakyshane/whatevs');")
            }));
            stream.end();
        });
    });
    it('does not throw absolute path NOT found', function () {
        assert.doesNotThrow(function () {
            var stream = noAbs();
            stream.write(new File({
                cwd: "/",
                base: "/test/",
                path: "/test/file.js",
                contents: new Buffer(" require('users/shakyshane/whatevs');")
            }));
            stream.end();
        });
    });
});

