var gulp = require('gulp');
var featurebook = require('featurebook').commands;
var del = require('del');

gulp.task('default', ['spec:pdf', 'spec:html']);

gulp.task('spec:clean', function (done) {
  del([
    'dist'
  ], done);
});

gulp.task('spec:pdf', function (done) {
  featurebook.pdf(
    'features',
    'dist'
  );
  done();
});

gulp.task('spec:html', function (done) {
  featurebook.html(
    'features',
    'dist'
  );
  done();
});

gulp.task('spec:serve', function (done) {
  featurebook.serve(
    'features',
    3000
  );
  done();
});
