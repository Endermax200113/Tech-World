const {src} = require('gulp'),
	ftp = require('vinyl-ftp'),
	ftpSettings = require('../tasks/ftp_settings'),
	chalk = require('chalk'),
	connect = ftp.create(ftpSettings);

module.exports = function deploy() {
	return src(['build/**/*.*', '!build/**/*.map'])
		.pipe(connect.newer('public_html/'))
		.pipe(connect.dest('public_html/'))
		.on('success', () => console.log(`Файлы ./build были выложены в https://${chalk.blueBright(ftpSettings.host)}`));
}