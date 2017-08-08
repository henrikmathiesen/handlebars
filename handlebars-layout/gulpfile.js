// following along: https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/

var gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

var config = {
    path: {
        // The current working directory is set from gulp script in package json, so these paths are relative to that
        src: './src',
        bld: './build'
    }
};

gulp.task('default', function () {
    return gulp.src(config.path.src + '/pages/*.hbs')

        // In the first argument (currently an empty object), we can send in template data
        .pipe(handlebars({}, {
            // ignores included partials that are not in batch path(?)
            ignorePartials: true,
            batch: [config.path.src + '/partials']
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(config.path.bld));
});
