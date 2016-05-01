# featurebook-gulp-example

> An example FeatureBook integration into Gulp-based build

[![Build Status](https://travis-ci.org/SOFTWARE-CLINIC/featurebook-gulp-example.svg)](https://travis-ci.org/SOFTWARE-CLINIC/featurebook-gulp-example)
[![Dependency Status](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example.svg)](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example)
[![devDependencies](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example/dev-status.svg)](https://david-dm.org/SOFTWARE-CLINIC/featurebook-gulp-example#info=devDependencies)

An example [FeatureBook](https://github.com/SOFTWARE-CLINIC/featurebook) integration into a [Gulp](http://gulpjs.com)-based build.

You do **not** need any Gulp plugin to run FeatureBook commands from a Gulp-based build, use FeatureBook's
[public API](https://github.com/SOFTWARE-CLINIC/featurebook/wiki/Public-API) directly.

```js
var gulp = require('gulp');
var featurebookPdf = require('featurebook-pdf');

gulp.task('spec:pdf', function(done) {
  featurebookPdf(
    'features',
    'dist/pdf'
  );
  done();
});
```

This project illustrates three usage scenarios:

* `gulp spec:pdf` - a task that builds a [PDF document](./README/pdf/specification.pdf); typically run on a CI server
* `gulp spec:html` - a task that builds an [HTML document](./README/html/index.html); typically run on a CI server
* `gulp spec:serve` - a task that serves the [features](./features) directory as a system specification
