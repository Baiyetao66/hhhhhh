const gulp = require("gulp");
const connect = require("gulp-connect");
//gulp-sass 浏览器本身不支持sass的语法 把sass转成css
const sass = require("gulp-sass");
//gulp-concat 合并 减少请求次数
const concat = require("gulp-concat");
//gulp-uglify 压缩 减小文件大小
const uglify = require("gulp-uglify");
//重新命名
const rename = require("gulp-rename");
//压缩css
const cleanCss = require("gulp-clean-css");
//高版本转低版本
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");




//拷贝单个文件
gulp.task("html", done => {
    gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());
    done();
});

gulp.task("sass", done => {

    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});

// 外部css样式
gulp.task("css", done => {
    gulp.src("css/*.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
    done()
})

gulp.task("img", done => {

    gulp.src("img/**")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());

    done();

})

gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
})



//监听
gulp.task("watch", done => {

    gulp.watch("html/*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    // gulp.watch("css/*.css", gulp.series("css"));
    gulp.watch("img/*", gulp.series("img"));
    gulp.watch("js/*.js", gulp.series("js"));


    done();
})


//搭建服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});


//babel
gulp.task("babel", done => {

    gulp.src('js/es6.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'))


    done();
})
gulp.task("build", gulp.parallel("html", "js", "img", "css", "sass"));

gulp.task("default", gulp.series("server", "build", "watch"));