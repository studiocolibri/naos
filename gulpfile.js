let {series, src, dest} = require('gulp');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let imageminMozjpeg = require('imagemin-mozjpeg');
let imageResize = require("gulp-image-resize");
/* let gulpNewer = require("gulp-newer"); */
let changed = require("gulp-changed");

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

let imgSrc = "static/assets/uploads/**";
let dimensions = [ 400, 620, 768, 1240 ];

function images(cb) {
  dimensions.forEach(function (size) {
    src(imgSrc)
      .pipe(changed(`static/assets/dest/${size}`))
      .pipe(imagemin([    
          imagemin.jpegtran({progressive: true}),
          imageminMozjpeg({
              quality: 80
          })
      ]))
      .pipe(imageResize({ width: size, upscale: false, crop: false }))
      .pipe(dest(`static/assets/dest/${size}`))
  });
  cb();
}

exports.default = series(minify, images);
exports.images = images;
exports.minify = minify;