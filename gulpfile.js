var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var svgo = require('imagemin-svgo');
var logger = require('gulp-logger');


gulp.task('default', () =>
    gulp.src('src/**/*')
    .pipe(logger({
        before: 'Стартуем OPTIMG!',
        after: 'OPTIMG завершен!',
        // extname: '.js.gz',
        showChange: true
    }))
    .pipe(imagemin({ progressive: true }, [
        imagemin.gifsicle(),
        imagemin.jpegtran(),
        imagemin.optipng(),
        imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist'))
);
