var gulp = require('gulp');
var featurebook = require('featurebook');
var del = require('del');

gulp.task('default', ['spec-build']);

gulp.task('clean', function(done) {
  del([
    'dist'
  ], done);
});

gulp.task('spec-build', function(done) {
  featurebook.build(
    __dirname + '/features',
    'pdf',
    __dirname + '/dist'
  );
  done();
});

gulp.task('spec-serve', function(done) {
  featurebook.serve(
    __dirname + '/features',
    3000
  );
  done();
});
