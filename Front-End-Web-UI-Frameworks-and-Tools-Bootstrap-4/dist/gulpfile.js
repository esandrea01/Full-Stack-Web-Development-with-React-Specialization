"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  del = require("del"),
  imagemin = require("gulp-imagemin"),
  uglify = require("gulp-uglify"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  cleanCss = require("gulp-clean-css"),
  flatmap = require("gulp-flatmap"),
  htmlmin = require("gulp-htmlmin");

gulp.task("sass", function() {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./css/*.scss", ["sass"]);
});

gulp.task("browser-sync", function() {
  var files = [
    "./*.html",
    "./css/*.css",
    "./imgs/*.{png,jpg,gif}",
    "./js/*.js"
  ];

  browserSync.init(files, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task(
  "default",
  gulp.series("browser-sync", function() {
    gulp.start("sass:watch");
  })
);

// Default task
// gulp.task("default", ["browser-sync"], function() {
//   gulp.start("sass:watch");
// });
