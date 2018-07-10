var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var babel = require("gulp-babel");

//Compile SASS and prefix for browser compatabilities. Used PostCSS to run all at once to make build go faster and help with management.
gulp.task("sass", function() {
	
	//The var postPlugins holds all plugins for postCSS
	var postPlugins = [
		autoprefixer({browsers: ["> 0%"]})	
	];

	return gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(postcss(postPlugins))
	.pipe(gulp.dest("css"));
});


gulp.task("babel", function(){
	return gulp.src("scripts/*.js")
	.pipe(babel({
		presets: ["es2015"]//Compiled file
	}))
	.pipe(gulp.dest("js"));
});

gulp.task("default", ['sass', 'babel']);