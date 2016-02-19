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

gulp.task('ts-lint', function () {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})

gulp.task('compile-ts', function () {
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

gulp.task('serve', ['ts-lint', 'compile-ts', 'compile-sass'], function () {

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
    gulp.watch([config.allSass], ['compile-sass']);

    browserSync({
        port: 5600,
        files: ['./app/**/*.html', './app/**/*.js', './src/**/*.css'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: superstatic({debug: false})
        }
    });
});

gulp.task('default', ['serve']);


gulp.task('build-prod', function () {

    var path = require('path');

    gulp
        .src(['!build/', '!node_modules/', 'server/**/*'])
        .pipe(gulp.dest(path.join(PATHS.dist.build, 'server/')));

    gulp
        .src(['!build/', '!node_modules/', 'app/**/*', '!app/**/*.ts', '!app/**/*.js.map'])
        .pipe(gulp.dest(path.join(PATHS.dist.build, 'app/')));

    gulp
        .src(['!build/', '!node_modules/', 'src/**/*', '!src/sass/**/*'])
        .pipe(gulp.dest(path.join(PATHS.dist.build, 'src/')));


    PATHS.lib.forEach(function (lib, index, array) {
        gulp.src(lib.src)
            .pipe(
                gulp.dest(
                    path.join(PATHS.dist.lib, lib.dist)
                )
            )
    });

    gulp
     .src(['index.html'])
     .pipe(gulp.dest(PATHS.dist.build));

});


var PATHS = {
    dist: {
        build: 'build/',
        lib: 'build/lib/'
    },
    lib: [
        {
            src: 'node_modules/font-awesome/css/**',
            dist: 'font-awesome/css/'
        }, {
            src: 'node_modules/font-awesome/fonts/**',
            dist: 'font-awesome/fonts/'
        }, {
            src: 'node_modules/jquery/dist/jquery.min.js',
            dist: 'jquery'
        }, {
            src: 'node_modules/angular2/bundles/angular2-polyfills.js',
            dist: 'angular2'
        }, {
            src: 'node_modules/angular2/bundles/angular2.dev.js',
            dist: 'angular2'
        }, {
            src: 'node_modules/angular2/bundles/router.dev.js',
            dist: 'angular2'
        }, {
            src: 'node_modules/angular2/bundles/http.dev.js',
            dist: 'angular2'
        }, {
            src: 'node_modules/systemjs/dist/system.src.js',
            dist: 'systemjs'
        }, {
            src: 'node_modules/rxjs/bundles/Rx.js',
            dist: 'rxjs'
        }, {
            src: 'node_modules/jquery/dist/jquery.min.js',
            dist: 'jquery'
        }, {
            src: 'node_modules/jquery-ui/jquery-ui.js',
            dist: 'jquery-ui'
        }, {
            src: 'node_modules/jquery-ui/themes/smoothness/**/*',
            dist: 'jquery-ui/themes/smoothness'
        }, {
            src: 'node_modules/chartjs/Chart.js',
            dist: 'chartjs'
        }, {
            src: 'node_modules/bootstrap/dist/**/*',
            dist: 'bootstrap'
        }
    ]
};
