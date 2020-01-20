let {series, src, dest} = require('gulp');
let htmlmin = require('gulp-htmlmin');

function minify() {
  return src('public/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public'));
}

exports.default = minify;
exports.minify = minify;