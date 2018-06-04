const gulp = require('gulp');
const pug = require('gulp-pug');


gulp.task('createHtml', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./lib/*.pug')
    .pipe(pug({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./trunk/'))
});

gulp.task('watch', function () {
	 gulp.watch('./lib/**/*.pug',['createHtml']);
});

gulp.task('default', ['createHtml','watch']);