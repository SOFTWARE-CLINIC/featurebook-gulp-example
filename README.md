FeatureBook Gulp Example
========================

[![Build Status](https://travis-ci.org/SOFTWARE-CLINIC/featurebook-gulp-example.svg)](https://travis-ci.org/SOFTWARE-CLINIC/featurebook-gulp-example)
[![devDependencies](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example/dev-status.svg)](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example#info=devDependencies)

An example [FeatureBook](https://github.com/SOFTWARE-CLINIC/featurebook)
integration into [Gulp](http://gulpjs.com)-based build.

You don't need any Gulp plugins to run FeatureBook commands from the Gulp-based
build, use FeatureBook directly.

```javascript
var gulp = require('gulp');
var featurebook = require('featurebook');

gulp.task('spec-build', function(done) {
  featurebook.build({
    sourceDir: __dirname + '/features',
    format: ['html', 'pdf']
  });
  done();
});
```
