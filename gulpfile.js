var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var svgo = require('imagemin-svgo');


gulp.task('default', () =>
    gulp.src('src/images/**/*')
    .pipe(imagemin(
    	{ progressive: true },
			[
				imagemin.gifsicle(), 
				imagemin.jpegtran(), 
				imagemin.optipng(), 
				imagemin.svgo()
			]
    	))
    .pipe(gulp.dest('dist/images'))
);
