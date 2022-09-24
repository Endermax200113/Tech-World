const {src, dest} = require('gulp'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    recompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    bs = require('browser-sync');

module.exports = function rastr() {
    return src('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
        .pipe(changed('build/img'))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        },
        [
            recompress({
                loops: 6,
                min: 50,
                max: 90,
                quality: 'high',
                use: [pngquant({
                    quality: [0.8, 1],
                    strip: true,
                    speed: 1
                })]
            }),
            imagemin.gifsicle(),
            imagemin.optipng,
            imagemin.svgo()
        ]))
        .pipe(dest('build/img'))
        .pipe(bs.stream());
}