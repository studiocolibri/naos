const {series, src, dest} = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageResize = require("gulp-image-resize");
const gulpNewer = require("gulp-newer");

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

const imgSrc = "static/assets/uploads/**";
const dimensions = [ 400, 620, 768, 1240 ];

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
      .pipe(imagemin())
      .pipe(dest(`public/assets/dest/${size}`))
  });
  cb();
}

exports.default = series(minify, images);
exports.images = images;
exports.minify = minify;