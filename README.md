FeatureBook Gulp Example
========================

[![Build Status](https://travis-ci.org/SOFTWARE-CLINIC/featurebook-gulp-example.svg)](https://travis-ci.org/SOFTWARE-CLINIC/featurebook-gulp-example)
[![devDependencies](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example/dev-status.svg)](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example#info=devDependencies)

An example [FeatureBook](https://github.com/SOFTWARE-CLINIC/featurebook)
integration into a [Gulp](http://gulpjs.com)-based build.

You do **not** need any Gulp plugin to run FeatureBook commands from a Gulp-based
build, use FeatureBook directly.

```js
var gulp = require('gulp');
var featurebook = require('featurebook').commands;

gulp.task('spec:build', function(done) {
  featurebook.build(
    'features',
    'pdf',
    'dist'
  );
  done();
});
```

This project illustrates two usage scenarios:

* `gulp spec:build` - a task that builds a PDF specification document; typically run on a CI server
* `gulp spec:serve` - a task that serves the [features](./features) directory as a system specification
