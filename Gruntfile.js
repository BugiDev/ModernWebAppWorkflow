/**
 * Created by Bogdan.Begovic on 9/30/2014.
 */

module.exports = function (grunt) {
    'use strict';
    var optimizedJSOutFileName = 'ToDoApp.js';
    var dateForJsHintReport = new Date();


    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            watch: {
                scripts: {
                    files: ['js/**.js'],
                    options: {
                        livereload: true
                    }
                }
            },
            connect: {
                dev: {
                    options: {
                        port: 12222,
                        base: '',
                        hostname: 'localhost',
                        debug: true,
                        open: 'http://localhost:12222/ToDoApp.html',
                        protocol: 'http',
                        livereload: true
                    }
                },
                production: {
                    options: {
                        port: 12233,
                        base: 'build',
                        hostname: 'localhost',
                        debug: true,
                        open: 'http://localhost:12233/ToDoApp.html',
                        protocol: 'http',
                        livereload: true
                    }
                }
            },
            copy: {
                build: {
                    src: ['ToDoApp.html', 'bower_components/jquery/dist/jquery.min.js'],
                    dest: 'build',
                    expand: true
                }
            },
            jshint: {
                dev: {
                    src: ['Gruntfile.js',
                        'js/**/*.js'],
                    options: {
                        jshintrc: 'todo.jshintrc',
                        force: true,
                        reporter: 'checkstyle',
                        reporterOutput: 'jsHintErrors/' + dateForJsHintReport.getMonth() + 1 + '.' + dateForJsHintReport.getDate() + '.' + dateForJsHintReport.getFullYear() + '-' + dateForJsHintReport.getHours() + '.' + dateForJsHintReport.getMinutes() + '.' + dateForJsHintReport.getSeconds() + '-error.log.xml'
                    }
                }
            },
            clean: {
                build: {
                    src: ['build', 'jsHintErrors']
                }
            },
            requirejs: {
                app: {
                    options: {
                        baseUrl: 'bower_components',
                        include: ['../js/main.js', 'requirejs/require'],
                        paths: {
                            'knockout': 'knockout/dist/knockout',
                            'appViewModel': '../js/appViewModel',
                            'toDoItem': '../js/toDoItem'
                        },
                        name: '../js/main',
                        out: 'build/js/' + optimizedJSOutFileName,
                        findNestedDependencies: true,
                        removeCombined: true,
                        optimize: 'uglify2'
                    }
                }
            },
            toggleComments: {
                customOptions: {
                    options: {
                        padding: 4,
                        removeCommands: true
                    },
                    files: {
                        'build/ToDoApp.html': 'build/ToDoApp.html'
                    }
                }
            },
            sass: {
                production: {
                    options: {
                        style: 'compressed'
                    },
                    files: {
                        'build/css/main.css': 'scss/main.scss'
                    }
                },
                dev: {
                    options: {
                        style: 'compressed'
                    },
                    files: {
                        'css/main.css': 'scss/main.scss'
                    }
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-comment-toggler');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask(
        'dev run',
        ['jshint:dev', 'sass:dev', 'connect:dev', 'watch:scripts']
    );

    grunt.registerTask(
        'production  run',
        ['build compile', 'connect:production', 'watch:scripts']
    );

    grunt.registerTask(
        'build compile',
        ['clean project', 'jshint:dev', 'copy:build', 'requirejs', 'sass:production', 'toggleComments']
    );

    grunt.registerTask(
        'clean project',
        ['clean:build']
    );
};
