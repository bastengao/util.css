var gulp = require('gulp');
var sass = require('gulp-sass');
var tar = require('gulp-tar');
var zip = require('gulp-zip');
var gzip = require('gulp-gzip');

gulp.task('default', function () {
    gulp.src('./*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

var zipSource = ['./common.scss',
              'dist/common.css',
              'README.md',
              'LICENCES',
              'bower.json',
              'package.json',
              'gulpfile.js'
            ]

gulp.task('zip', function() {
    gulp.src(zipSource)
        .pipe(zip('common.css.zip'))
        .pipe(gulp.dest('./'));
});

gulp.task('gzip', function() {
    gulp.src(zipSource)
        .pipe(tar('common.css.tar'))
        .pipe(gzip())
        .pipe(gulp.dest('.'));
});
