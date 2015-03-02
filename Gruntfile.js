module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';',
				stripBanners: { block: true, line: true },
			},
			app: {
				dest: 'build/js/app.min.js',
				src: [
					'packages/angular/angular.js',
					'packages/angular-route/angular-route.js',

					'app/scripts/controllers/main.js',
					'app/scripts/controllers/HomeCtrl.js',

					'app/scripts/directives/main.js',

					'app/scripts/factories/main.js',

					'app/scripts/services/main.js',

					'app/scripts/app.js',
				]
			}
		},

		copy: {
			fonts: {
				files: [
					{
						expand: true,
						flatten: true,
						src: ['packages/font-awesome/fonts/**.*'],
						dest: 'build/fonts'
					}
				]
			}
		},

		uglify: {
			app: {
				options: {
					mangle: false
				},
				files: {
					'build/js/app.min.js': ['build/js/app.min.js']
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'build/css/app.min.css': [
						'css/bootstrap-yeti.css',
						'packages/font-awesome/css/font-awesome.css',
						'css/app.css',
					]
				}
			}
		},

		watch: {
			dev: {
				files: ['Gruntfile.js', 'app/scripts/**/*.js', 'css/**/*.css'],
				tasks: ['concat:app', 'cssmin'],
				options: {
					atBegin: true,
					liveReload: true
				}
			},
		},

		jshint: {
			all: ['Gruntfile.js', 'app/scripts/**/*.js']
		}
	});

	grunt.registerTask('dev', ['concat', 'cssmin']);
	grunt.registerTask('default', ['concat',  'uglify', 'cssmin', 'copy:fonts']);

	require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
};
