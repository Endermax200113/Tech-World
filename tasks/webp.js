const {src} = require('gulp'),
    webpConv = require('gulp-webp'),
    changed = require('gulp-changed'),
    multiDest = require('gulp-multi-dest'),
    plumber = require('gulp-plumber');

module.exports = function webp() {
    return src('build/img/**/*.+(png|jpg|jpeg)')
        .pipe(plumber())
        .pipe(changed('build/img', {
            extension: '.webp'
        }))
        .pipe(webpConv())
        .pipe(multiDest(['src/img', 'build/img']));
}