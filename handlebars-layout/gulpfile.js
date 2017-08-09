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
            // - lets test creating a _partial-not-in-path.hbs and see if it renders,  gulp compiler throws an error
            ignorePartials: true,
            batch: [config.path.src + '/partials'],
            helpers: {
                capitals: function (str) {
                    return str.toUpperCase();
                }
            }
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(config.path.bld));
});
