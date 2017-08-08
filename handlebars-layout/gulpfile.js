// following along: https://cloudfour.com/thinks/the-hidden-power-of-handlebars-partials/

const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

var config = {
    path: {
        src: './handlebars-layout/src',
        bld: './handlebars-layout/build'
    }
};

gulp.task('html', function () {
    return gulp.src(config.path.src + '/pages/*.hbs')

        // In the first argument (currently an empty object), we can send in template data
        .pipe(handlebars({}, {
            ignorePartials: true,
            batch: [config.path.src + '/partials']
        }))
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(config.path.bld));
});
