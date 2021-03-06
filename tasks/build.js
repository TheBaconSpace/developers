var gulp = require("gulp");
var babel = require("gulp-babel");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("build", [ "build-backend", "build-frontend" ]);

gulp.task("build-backend", function () {
  gulp.src("./src/_html/**/*").pipe(gulp.dest("./__build__/_html/"));
  return gulp.src("./src/**/*.js*")
      .pipe(babel())
      .pipe(gulp.dest("./__build__/"));
});

gulp.task("build-frontend", function () {
  return gulp.src("./app/stylesheets/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest("./__build__/assets/css"));
});
