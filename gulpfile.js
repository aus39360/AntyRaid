
"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const webpack = require("webpack");


function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: 'app'
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

function css() {
  return gulp.src('./sass/**/custom.scss')
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./app/css'))
    .pipe(browsersync.stream());
}


function watchFiles() {
  gulp.watch("./sass/*.scss", css);
  gulp.watch("./app/*.html",browserSyncReload);
}



gulp.task("watch", gulp.parallel(watchFiles, browserSync));