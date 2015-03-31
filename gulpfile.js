var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
    gulp.src('./*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});
