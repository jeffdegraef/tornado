var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var shell = require('gulp-shell')


gulp.task('build', function ()
{
  gutil.log('running build task!');
  return browserify('./source/server.js')
  .transform(babelify.configure(
      {
        presets: ["es2015", "react"]
      })).bundle()
.pipe(source('server.js'))
.pipe(gulp.dest('./build/'));
});


gulp.task('watch', function () {
   gutil.log('running watcher task!');
   gulp.watch('source/*.js', ['default']);
    gulp.watch('source/components/*.js', ['default']);
});

gulp.task('default',['build','watch'], shell.task([
  'sudo stop tornado_daemon',
  'sudo start tornado_daemon'
])
);