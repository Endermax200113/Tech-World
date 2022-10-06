const {src, dest} = require('gulp'),
	svgmin = require('gulp-svgmin'),
	svgCSS = require('gulp-svg-css-pseudo');

module.exports = function svg_css() {
	return src('src/svg/css/**/*.svg')
		.pipe(svgmin({
			plugins: [{
				removeComments: true
			},
			{
				removeEmptyContainers: true
			}
		]}))
		.pipe(svgCSS({
			fileName: '_svg',
			fileExt: 'scss',
			cssPrefix: '--svg__',
			addSize: false
		}))
		.pipe(dest('src/scss/global'));
}