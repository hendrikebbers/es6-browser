import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from './webpack.config.babel';

gulp.task('babel', () => {
    return gulp.src('src/*.es6')
        .pipe(babel())
        .pipe(gulp.dest('target'));
});

gulp.task('webpack', ['babel'], function(callback) {
    var myConfig = Object.create(webpackConfig);

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            colors: true,
            progress: true
        }));
        callback();
    });
});


gulp.task('default', ['webpack']);