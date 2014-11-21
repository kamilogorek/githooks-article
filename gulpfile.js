var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var browserify = require('browserify');
var tapeRun = require('tape-run');
var tapSpec = require('tap-spec');

gulp.task('lint', function () {
    return gulp.src('app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs())
});

gulp.task('test', function () {
    return browserify('./test.js')
        .bundle()
        .pipe(tapeRun())
        .pipe(tapSpec())
        .pipe(process.stdout);
});

gulp.task('validate', ['lint', 'test']);
