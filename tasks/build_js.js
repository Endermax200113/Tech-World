const {src, dest} = require('gulp'),
	uglify = require('gulp-uglify-es').default,
	babel = require('gulp-babel'),
	concat = require('gulp-concat');

module.exports = function build_js() {
	return src(['src/components/**/*.js', 'src/js/01_main.js'])
		.pipe(uglify())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.min.js'))
		.pipe(dest('build/js/'))
}