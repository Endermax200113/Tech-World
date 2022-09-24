const {src, dest} = require('gulp'),
    include = require('gulp-file-include'),
    bs = require('browser-sync');

module.exports = function php() {
    return src('src/**/*.php')
        .pipe(include())
        .pipe(dest('build'))
        .pipe(bs.stream());
}