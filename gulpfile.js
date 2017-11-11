var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
// var cssmin          = require('gulp-cssmin');
// var sourcemaps      = require('gulp-sourcemaps');



gulp.task('autoprefixer', function () {
    return gulp.src('style/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style/'));
});