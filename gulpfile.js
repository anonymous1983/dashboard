var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

var browserSync = require('browser-sync');
var superstatic = require('superstatic');


gulp.task('libs', function () {
    return gulp.src(CONFIG.PATHS.lib).pipe(gulp.dest(CONFIG.PATHS.dist.lib));
});

gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('compile-sass', function () {
    var sass = require('gulp-sass');

    var sassCssResult = gulp.src(config.indexSass)
        .pipe(sass())
        .pipe(concat('style.sass.css'))
        .pipe(gulp.dest(config.cssOutputPath))
        .pipe(sass({
            compress: true
        }))
        .pipe(rename({suffix: '.sass.min'}))
        .pipe(gulp.dest(config.cssOutputPath));

    return sassCssResult;
});

gulp.task('serve', ['ts-lint', 'compile-ts', 'compile-sass'], function() {
    	
    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
    gulp.watch([config.allSass], ['compile-sass']);
	
    browserSync({
        port: 3000,
        files: ['./app/**/*.html', './app/**/*.js', './src/**/*.css'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',    
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: superstatic({ debug: false})
        }
    });	
});

gulp.task('default', ['serve']);
