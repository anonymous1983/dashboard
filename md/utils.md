[home](../README.md)
Utils
-----------------------


https://medium.com/google-developer-experts/angular-2-introduction-to-new-http-module-1278499db2a0#.7lfncc38k

http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html

https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/

http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html



http://blog.thoughtram.io/angular/2015/05/18/dependency-injection-in-angular-2.html

http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html

http://www.datchley.name/es6-promises/


https://github.com/angular/angular/blob/2.0.0-beta.0/modules/angular2/src/facade/lang.ts

https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3.11.1


http://www.alsacreations.com/tuto/lire/1686-introduction-a-gulp.html


https://github.com/taylorhakes/html5-sortable
http://www.html5rocks.com/en/tutorials/dnd/basics/#toc-creating-dnd-content

http://datatorrent.github.io/malhar-dashboard-webapp/#/

@Directive v/s @Component in angular2
http://www.codeandyou.com/2016/01/difference-between-component-and-directive-in-Angular2.html


https://www.reddit.com/r/Angular2/

https://www.youtube.com/watch?v=x296y5mErWI
https://github.com/gdi2290/ng-vegas-angular2-d3

http://valor-software.com/ng2-charts/

https://github.com/MrRio/jsPDF
http://mrrio.github.io/jsPDF/#
https://parall.ax/services

https://github.com/valor-software/ng2-dragula

### http://builtwithangular2.com/page/3/

https://dzone.com/articles/create-an-angular-2-component-library-and-consume


https://github.com/iamssen/angular2-reflow


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



    /*gulp
     .src(['index.html'])
     .pipe(gulp.dest(PATHS.dist.build));*/
    //return true;



gulp.task('build-prod', ['build-pre-prod'], function () {
    var path = require('path'),
        inject = require('gulp-inject');
    var index_src = gulp.src('index.src.html');
    var sources = gulp.src([path.join(PATHS.dist.build, '/lib/**/*.js'), path.join(PATHS.dist.build, '/**/*.css'), '!' + path.join(PATHS.dist.build, '/**/*.css')], {read: false});
    return index_src.pipe(inject(sources))
        .pipe(gulp.dest(PATHS.dist.build));
});



<!DOCTYPE html>
<html lang="fr">
<head>
    <base href="/build/">
    <title>Dashboard</title>
    <link rel="stylesheet" href="lib/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="lib/jquery-ui/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="src/css/style.sass.css">

    <script src="lib/angular2/angular2-polyfills.js"></script>
    <script src="lib/systemjs/system.src.js"></script>
    <script src="lib/rxjs/Rx.js"></script>
    <script src="lib/angular2/angular2.dev.js"></script>
    <script src="lib/angular2/router.dev.js"></script>
    <script src="lib/angular2/http.dev.js"></script>
    <script src="lib/chartjs/Chart.js"></script>

    <script src="lib/jquery/jquery.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>