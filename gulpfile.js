'use strict';

const gulp = require('gulp');  // Task runner
const less = require('gulp-less'); // Compile Less to CSS
const rename = require('gulp-rename'); // Rename some files
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer'); // Prefix CSS
const mqpacker = require('css-mqpacker');
const cleanss = require('gulp-cleancss');
const sourcemaps = require('gulp-sourcemaps'); // Write source maps
const concat = require('gulp-concat'); // Concat JS
const fileinclude = require('gulp-file-include');
const uglify = require('gulp-uglify'); // Minify JS
const browserSync = require('browser-sync').create(); // Synchronised browser testing
const ghPages = require('gulp-gh-pages'); // Publish contents to Github pages

// Компиляция LESS
gulp.task('less', function () {
  return gulp.src('./src/less/style.less')
  // .pipe(plumberNotifier())
      .pipe(less())
      .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
      ]))
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./src/css'));
  // .pipe(browserSync.stream());
});

// Сборка HTML
gulp.task('html', function() {
  return gulp.src('./src/blocks/*.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent: true,
      }))
      .pipe(gulp.dest('./src/'));
});

// Конкатенация Javascript custom
gulp.task('js', function() {
    return gulp.src('./src/js/custom/*.js')
        .pipe(concat('custom.min.js'))
        .pipe(gulp.dest('./src/js/'));
});

// Конкатенация Javascript vendor
gulp.task('js-vendor', function() {
    return gulp.src('./src/js/vendor/*.js')
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./src/js/'));
});

// Сборка всего
gulp.task('build', function(){
  gulp.src('./src/css/*.css')
      .pipe(cleanss())
      .pipe(gulp.dest('./build/css'));
  gulp.src('./src/*.*')
      .pipe(gulp.dest('./build/'));
  gulp.src('./src/fonts/**/*.*')
      .pipe(gulp.dest('./build/fonts'));
  gulp.src('./src/icons/**/*.*')
      .pipe(gulp.dest('./build/icons'));
  gulp.src('./src/img/**/*.*')
      .pipe(gulp.dest('./build/img'));
  gulp.src('./src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build/js'));
  gulp.src('./src/svg/*.*')
      .pipe(gulp.dest('./build/svg'));
});

// Отправка в GH pages (ветку gh-pages репозитория)
gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
      .pipe(ghPages());
});

// Очистка папки сборки
gulp.task('clear', function() {
  return gulp.src('build/**')
      .pipe(clean({force:true}));
});

// запуск browserSync (компилятор less и сборка html)
gulp.task('serve', ['less', 'html'], function(){
  browserSync.init({
    server: "./src"
  });
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/**/**/*.html', ['html']);
  gulp.watch('src/css/*.css').on('change', browserSync.reload);
  gulp.watch('src/js/custom/*.js', ['js']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});