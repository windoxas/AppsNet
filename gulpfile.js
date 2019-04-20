const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
// const sourcemaps = require('gulp-sourcemaps');
var gcmq = require('gulp-group-css-media-queries');


const config = {
    paths: {
        less: './style/*.css',
        html: './index.html'
    },
    output: {
        path: './',
        html: './index.html'

    }
};

gulp.task('less', function () {
       gulp.src(config.paths.less)
        // .pipe(sourcemaps.init())
        .pipe(gcmq())
        .pipe(cleanCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });
    gulp.watch(config.paths.less, ['style']);
    gulp.watch(config.paths.html).on('change', browserSync.reload);

});
gulp.task('default', ['less', 'serve']);
