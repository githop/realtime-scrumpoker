/**
 * Created by githop on 11/3/15.
 */
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlReplace = require('gulp-html-replace');
var ngAnnotate = require('gulp-ng-annotate');
var del  = require('del');
var jspm = require('jspm');
var path = require('path');

var publicDir = path.join(__dirname, 'public/');
var clientDir = path.join(__dirname, 'client/');


gulp.task('build', function() {
  var pub = path.join(publicDir + 'scrumPoker.js');
  return jspm.bundleSFX(path.join(clientDir, 'scrumPoker/scrumPoker.module'), pub, {})
    .then(function() {
      return gulp.src(pub)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('scrumPoker.min.js'))
        .pipe(gulp.dest(publicDir));
    })
    .then(function() {
      return gulp.src('client/index.html')
        .pipe(htmlReplace({
          'js': 'scrumPoker.min.js'
        }))
        .pipe(gulp.dest(publicDir));
    });
});

gulp.task('clean', function (done) {
  del(publicDir, done);
});