var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

gulp.task('build', function() {
    return gulp.src('main.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(browserify({
      debug : true
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('bin'))
});

gulp.task('watch', function() {
    return gulp.watch('main.js', ['build'])
});