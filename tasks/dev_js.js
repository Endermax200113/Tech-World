const {src, dest} = require('gulp'),
	uglify = require('gulp-uglify-es').default,
	concat = require('gulp-concat'),
	map = require('gulp-sourcemaps'),
	bs = require('browser-sync');

module.exports = function dev_js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(map.init())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(map.write('../sourcemaps'))
		.pipe(dest('build/js/'))
		.pipe(bs.stream());
}