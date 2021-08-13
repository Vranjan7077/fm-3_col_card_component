const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
var gcmq = require("gulp-group-css-media-queries");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");

gulp.task("scss", function () {
  return (
    gulp
      .src(["src/sass/main.scss"])
      .pipe(sass())
      .pipe(sass().on("error", sass.logError))
      .pipe(gcmq())
      .pipe(postcss([autoprefixer, cssnano()]))
      .pipe(concat("style.css"))
      .pipe(gulp.dest("dist/css"))
  );
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.scss", gulp.series("scss"));
});

gulp.task("default", gulp.series("scss", "watch"));
