import gulp from 'gulp';
import systemjs from 'gulp-systemjs-builder';
import rename from 'gulp-rename';
import webserver from 'gulp-webserver';

const paths = {
	assets: [
        'src/img*/**',
        'src/font*/**',
        'src/locales*/**/*.json',
		'src/jspm_packages*/**/*.ttf',
		'src/jspm_packages*/**/*.woff',
		'src/jspm_packages*/**/*.woff2'
	],
    html: 'src/index.html',
	dest: 'build/dist/META-INF/resources/'
};

// build JSPM modules
gulp.task('jspm', () => {
	let builder = systemjs('./src', './src/jspm.config.js');
	builder.config({
		separateCSS: true
	});

	builder.buildStatic('index.js', {
		// minify: false,
		// mangle: false,
		outFile: paths.dest + 'static/index.bundle.js',
		browser: true,
		lowResSourceMaps: true,
		format: 'umd',
		rollup: true
	});
});

// copy assets
gulp.task('copy-assets', function () {
	gulp.src(paths.assets)
		.pipe(gulp.dest(paths.dest + 'static'));
});

// copy html
gulp.task('copy-html', function () {
    gulp.src(paths.html)
		//.pipe(rename('index.html'))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', () => {
});

gulp.task('webserver', ['watch'], () => {
	gulp.src('src')
		.pipe(webserver({
			livereload: {
				enable: true,
				filter: (filename) => {
					return !(filename.match(/.scss$/));
				}
			},
			open: true,
			proxies: [{
				source: '/api',
				target: 'http://localhost:3000/'
			}]
		}));
});

gulp.task('build', ['jspm', 'copy-assets', 'copy-html']);

gulp.task('default', ['webserver']);