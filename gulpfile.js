var gulp = require('gulp');
var featurebook = require('featurebook').commands;
var path = require('path');
var del = require('del');

gulp.task('default', ['spec:build']);

gulp.task('spec:clean', function(done) {
  del([
    'dist'
  ], done);
});

gulp.task('spec:build', function(done) {
  featurebook.build(
    'features',
    'pdf',
    'dist'
  );
  done();
});

gulp.task('spec:serve', function(done) {
  featurebook.serve(
    'features',
    3000
  );
  done();
});
