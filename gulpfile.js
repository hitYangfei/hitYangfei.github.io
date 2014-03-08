var gulp   = require('gulp');
var gutil  = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// JS Scripts Path
var paths  = {
  scripts: [
    'bower_components/jquery/jquery.min.js',
    'bower_components/fastclick/lib/fastclick.js',
    'bower_components/foundation/js/foundation.min.js',
    '_js/app.js'
  ]
};

var dest   = {
  scripts: 'js'
};

gulp.task('default', function() {
  console.log('this is the default task');
});

gulp.task('compress', function() {
  gulp.src(paths.scripts)
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(dest.scripts))
    .pipe(uglify())
    .pipe(gulp.dest(dest.scripts));
});
