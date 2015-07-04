var gulp = require('gulp');
var featurebook = require('featurebook');

gulp.task('default', ['spec-build']);

gulp.task('spec-build', function(done) {
  console.log('Building specification...');
  done();
});

gulp.task('spec-serve', function(done) {
  console.log('Serving specification...');
  done();
});
