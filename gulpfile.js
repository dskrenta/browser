'use strict';
const gulp = require('gulp');
const riot = require('gulp-riot');
const watch = require('gulp-watch');
const babel = require('gulp-babel');
const batch = require('gulp-batch');
const del = require('del');
const electron = require('electron-connect').server.create({
  path: './build'
});

gulp.task('start', ['build', 'watch'], ()=> {
  electron.start();
});

gulp.task('renderer-restart', ()=> {
  electron.reload();
});

gulp.task('browser-restart', ()=> {
  electron.restart();
});

const paths = {
  components: 'app/components/**/*.tag',
  //copy: 'app/*.*(html|js)',
  copy: 'app/index.*(html|js)',
  style: 'app/style/*.css',
  scripts: 'app/app.js',
  utils: 'utils/**/*.js',
  build: './build/**/*.*'
};

gulp.task('clean', ()=> {
  return del(['./build']);
});

const riotTask = ()=> {
  return gulp.src('app/components/**/*.tag')
    .pipe(riot())
    .pipe(gulp.dest('./build/js'));
};

gulp.task('riot', ['clean'], riotTask);
gulp.task('riot-watch', riotTask);

const copyTask = ()=> {
  return gulp.src('app/index.*(html|js)')
    .pipe(gulp.dest('./build'));
};

gulp.task('copy', ['clean'], copyTask);
gulp.task('copy-watch', copyTask);

const styleTask = ()=> {
  return gulp.src('app/style/*.css')
    .pipe(gulp.dest('./build/style'));
};

gulp.task('style', ['clean'], styleTask);
gulp.task('style-watch', styleTask);

const scriptsTask = ()=> {
  return gulp.src('app/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build'));
};

gulp.task('scripts', ['clean'], scriptsTask);
gulp.task('scripts-watch', scriptsTask);

const utilsTask = ()=> {
  return gulp.src('utils/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./build/utils'));
};

gulp.task('utils', ['clean'], utilsTask);
gulp.task('utils-watch', utilsTask);

gulp.task('watch', ()=> {
  watch(paths.components, batch((events, done)=> {
    gulp.start('browser-restart', ['riot-watch'], done);
  }));
  watch(paths.copy, batch((events, done)=> {
    gulp.start('browser-restart', ['copy-watch'], done);
  }));
  watch(paths.style, batch((events, done)=> {
    gulp.start('browser-restart', ['style-watch'], done);
  }));
  watch(paths.scripts, batch((events, done)=> {
    gulp.start('browser-restart', ['scripts-watch'], done);
  }));
  watch(paths.utils, batch((events, done)=> {
    gulp.start('browser-restart', ['utils-watch'], done);
  }));
});

gulp.task('build', ['riot', 'copy', 'utils', 'scripts', 'style']);
