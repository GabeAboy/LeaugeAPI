var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function() {
  return gulp.src('./style/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
});

gulp.watch('./style/**/*.scss',['sass']);

gulp.task('default',['sass']);
