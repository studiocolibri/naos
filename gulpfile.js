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

function images(cb) {
    [400, 620, 768, 1240].forEach(function (size) {
      src(imgSrc)
        .pipe(gulpNewer(`static/assets/uploadsOut/${size}`))
        .pipe(imagemin([    
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 80
            })
        ]))
        .pipe(imageResize({ width: size }))
        .pipe(imagemin())
        .pipe(dest(`static/assets/uploadsOut/${size}`))
    });
    cb();
  }

exports.default = series(minify, images);
exports.images = images;
exports.minify = minify;