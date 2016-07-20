var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
return browserify('./source/app.js')
.transform(babelify.configure({
  presets: ["react"]
})).bundle()
.pipe(source('snapterest.js'))
.pipe(gulp.dest('./build/'));
});

gulp.task('test', function () {
return browserify('./source/test.js')
.transform(babelify.configure({
  presets: ["react"]
})).bundle()
.pipe(source('test.js'))
.pipe(gulp.dest('./build/'));
});
