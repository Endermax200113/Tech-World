const plugins = [];

const {src, dest} = require('gulp'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    map = require('gulp-sourcemaps'),
    chalk = require('chalk');

module.exports = function libs_js(done) {
    if (plugins.length > 0) {
        return src(plugins)
            .pipe(map.init())
            .pipe(uglify())
            .pipe(concat('libs.min.js'))
            .pipe(map.write('../sourcemaps'))
            .pipe(dest('build/js/'));
    } else
        return done(console.log(chalk.redBright("JS плагины не были добавлены.")));
}