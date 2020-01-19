let {series, src, dest} = require('gulp');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let imageminMozjpeg = require('imagemin-mozjpeg');
let imageResize = require("gulp-image-resize");
let gulpNewer = require("gulp-newer");

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

let imgSrc = "public/assets/uploads/**";
let dimensions = [ 400, 620, 768, 1240 ];

function images(cb) {
  dimensions.forEach(function (size) {
    src(imgSrc)
      .pipe(gulpNewer(`public/assets/dest/${size}`))
      .pipe(imagemin([    
          imagemin.jpegtran({progressive: true}),
          imageminMozjpeg({
              quality: 80
          })
      ]))
      .pipe(imageResize({ width: size, upscale: false, crop: false }))
      .pipe(dest(`public/assets/dest/${size}`))
  });
  cb();
}

exports.default = series(minify, images);
exports.images = images;
exports.minify = minify;