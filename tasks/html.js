const {src, dest} = require('gulp'),
    include = require('gulp-file-include'),
    htmlmin = require('gulp-htmlmin'),
    bs = require('browser-sync');

module.exports = function html() {
    return src(['src/**/*.html', '!src/components/**/*.html'])
        .pipe(include())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(dest('build'))
        .pipe(bs.stream());
}