const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanFolder = require('gulp-clean');
const minify = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

function clean_dist(callback){
    gulp.src('./dist/*').pipe(cleanFolder());
    callback();
}

function uglify_js(callback){
    gulp.src('./index.js').pipe(uglify()).pipe(gulp.dest('./dist'));
    callback();
};

function minify_css(callback){
    gulp.src('./style.css').pipe(minify()).pipe(gulp.dest('./dist'));
    callback();
};

function compress_image(callback){
    gulp.src('./images/*').pipe(imagemin()).pipe(gulp.dest('./dist/images'));
    callback();
}

exports.default = gulp.series(clean_dist, gulp.parallel(uglify_js, minify_css, compress_image));