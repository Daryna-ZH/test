var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
	gulp.src('./Project test/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./Project test/css'))
});

gulp.task('sass:watch', function() {
	gulp.watch('./Project test/*.scss', ['sass'])
});

gulp.task('cssConcat', function() {
    gulp.src('./Project test/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./Project test/dist'));
});