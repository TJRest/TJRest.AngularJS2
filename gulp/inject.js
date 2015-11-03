'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('inject', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });



  gulp.src([
    './node_modules/systemjs/dist/system.src.js',
    './node_modules/angular2/bundles/angular2.dev.js',
    './node_modules/typescript/lib/typescript.js'
  ]).pipe(gulp.dest(path.join(conf.paths.src, '/.tempLibs')));

  var nodeDependencies = gulp.src([
      path.join(conf.paths.src, '/.tempLibs/typescript.js'),
      path.join(conf.paths.src, '/.tempLibs/system.src.js'),
      path.join(conf.paths.src, '/.tempLibs/angular2.dev.js')
    ], { read : false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join(conf.paths.tmp, '/serve/app/**/*.module.js'),
    path.join(conf.paths.tmp, '/serve/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
  ], { read: false });

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe($.inject(nodeDependencies, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});


// move dependencies into build dir
gulp.task('dependencies', function () {
  return
});
