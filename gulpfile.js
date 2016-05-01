'use strict';

var gulp = require('gulp');
var featurebookPdf = require('featurebook-pdf');
var featurebookHtml = require('featurebook-html');
var featurebookServe = require('featurebook-serve');
var del = require('del');

gulp.task('default', ['spec:build']);

gulp.task('spec:clean', function (done) {
  del([
    'dist'
  ], done);
});

gulp.task('spec:build', ['spec:pdf', 'spec:html']);

gulp.task('spec:pdf', function (done) {
  featurebookPdf(
    'features',
    'dist/pdf'
  );
  done();
});

gulp.task('spec:html', function (done) {
  featurebookHtml(
    'features',
    'dist/html'
  );
  done();
});

gulp.task('spec:serve', function (done) {
  featurebookServe(
    'features',
    3000
  );
  done();
});
