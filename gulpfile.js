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
const dimensions = [ [400, 266], [620, 412], [768, 511], [1240, 824] ];

function images(cb) {
  dimensions.forEach(function (size) {
      src(imgSrc)
        .pipe(gulpNewer(`static/assets/uploadsOut/${size[0]}`))
        .pipe(imagemin([    
            imagemin.jpegtran({progressive: true}),
            imageminMozjpeg({
                quality: 80
            })
        ]))
        .pipe(imageResize({ width: size[0], height: size[1], upscale: true, crop: true }))
        .pipe(imagemin())
        .pipe(dest(`static/assets/uploadsOut/${size[0]}`))
    });
    cb();
  }

exports.default = series(minify, images);
exports.images = images;
exports.minify = minify;