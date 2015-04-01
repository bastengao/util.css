var gulp = require('gulp');
var rename    = require('gulp-regex-rename');
var sass = require('gulp-sass');
var tar = require('gulp-tar');
var zip = require('gulp-zip');
var gzip = require('gulp-gzip');

gulp.task('sass', function () {
    gulp.src('./*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function () {
    gulp.src('./*.scss')
        .pipe(sass({outputStyle: 'compressed', sourceComments: true}))
        .pipe(rename(/\.css$/, '.min.css'))
        .pipe(gulp.dest('./dist/'));
});

var zipSource = ['./util.scss',
              'dist/util.css',
              'README.md',
              'LICENCES',
              'bower.json',
              'package.json',
              'gulpfile.js'
            ];

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

gulp.task('default', ['sass', 'minify']);
