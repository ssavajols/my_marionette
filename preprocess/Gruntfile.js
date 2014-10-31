module.exports = function (grunt) {

    var config = grunt.file.readJSON('config_app.json');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: config,

        // JS HINT
        jshint: {
            all: ['Gruntfile.js', '<%= config.app_path %>/**/*.js' ],
            options: {
                force: true,
                reporter: require('jshint-stylish')
            }
        },

        clean: {
            sourceMap: ["<%= config.public_path %>/**/*.map"],
            tmp: ["<%= config.tmp_path %>/*"]
        },

        // FOR DEV APP FILES AND VENDOR FILES JS
        uglify: {
            options: {
                mangle: true,
                sourceMap: true,
                compress: true,
                preserveComments: false
            },
            uglify_vendor_files: {
                '<%= config.public_path %>/<%= config.js_dir %>/vendor.js': [
                    // BEFORE
                    '<%= config.tmp_path %>/_bower.js',
                    '<%= config.tmp_path %>/_templates.js',

                    // ALL
                    '<%= config.vendor_path %>/**/*.js',
                    '!<%= config.vendor_path %>/**/_*.js', // IGNORED
                    '!<%= config.vendor_path %>/bower_components/**/*'

                    // AFTER
                ]
            },

            uglify_dev_files: {
                "<%= config.public_path %>/<%= config.js_dir %>/app.js": [
                    '<%= config.app_path %>/**/*.js',
                    '!<%= config.app_path %>/**/_*.js' // IGNORED
                ]
            },
            dev_vendor: {
                options: {
                    compress: {
                        warnings: false
                    }
                },
                files: '<%= uglify.uglify_vendor_files %>'
            },
            dev_app: {
                files: '<%= uglify.uglify_dev_files %>'
            },
            // ONLY VENDORS
            prod: {
                options: {
                    sourceMap: false,
                    compress: {
                        drop_console: true,
                        warnings: false
                    }
                },
                files: '<%= uglify.uglify_vendor_files %>'
            }
        },

        bower_concat: {
            dev: {
                dest: '<%= config.tmp_path %>/_bower.js',
                cssDest: '<%= config.public_path%>/<%= config.css_dir %>/vendor.css',
                exclude: [
                    'almond'
                ],
                dependencies: config.bower_dependencies,
                mainFiles: config.bower_main_files,
                bowerOptions: {
                    sourceMap: true
                }
            },
            prod: {
                dest: '<%= config.tmp_path %>/_bower.js',
                cssDest: '<%= config.public_path%>/<%= config.css_dir %>/vendor.css',
                exclude: [
                    'requirejs',
                    'almond'
                ],
                dependencies: config.bower_dependencies,
                mainFiles: config.bower_main_files,
                bowerOptions: {
                }
            }
        },

        // APP FILES FOR BUILD ONLY
        requirejs: {
            compile: {
                options: {
                    baseUrl: "<%= config.app_path %>",
                    include: "<%= config.require_include_modules %>",
                    name: "../vendor/bower_components/almond/almond", // assumes a production build using almond
                    out: "<%= config.public_path %>/<%= config.js_dir %>/app.js",
                    optimize: "uglify2",
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    findNestedDependencies: true
                }
            }
        },

        twig: {
            options: {
                amd_wrapper: false,
                variable: 'window.Templates',
                template_key: function(path){
                    return path.replace(new RegExp(config.public_path+"\/"+config.template_dir+"\/(.*).twig"), "$1");
                }
            },
            target: {
                files: {
                    '<%= config.tmp_path %>/_templates.js': [
                        '<%= config.public_path %>/templates/**/*.twig'
                    ]
                }
            }
        },

        // SASS FILES
        sass: {
            sass_files:[
                {
                    expand: true,
                    cwd: '<%= config.sass_path %>',
                    src: ['**/*.scss'],
                    dest: '<%= config.public_path %>/<%= config.css_dir %>/',
                    ext: '.css'
                }
            ],
            dev: {
                options: {
                    sourcemap: true
                },
                files: '<%= sass.sass_files %>'
            },
            prod: {
                options: {
                    sourcemap: false
                },
                files: '<%= sass.sass_files %>'
            }
        },

        // WEB SERVER HTML
        connect: {
            dev: {
                options: {
                    protocol: "<%= config.protocole %>",
                    hostname: "<%= config.hostname %>",
                    port: "<%= config.port %>",
                    base: "<%= config.public_path %>",
                    livereload: true,
                    open: true
                }
            }
        },

        // WEB SERVER PHP
        php: {
            dev: {
                options: {
                    base: "<%= config.public_path %>",
                    keepalive: true,
                    open: true,
                    hostname: "<%= config.hostname %>",
                    port: "<%= config.port %>"
                }
            }
        },

        // WATCHER
        watch: {
            config: {
                files: ['Gruntfile.js', "config_app.json"],
                options: {
                    reload: true
                }
            },
            scripts: {
                files: ['<%= config.app_path %>/**/*.js'],
                tasks: ['jshint', 'uglify:dev_app'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            sass: {
                files: ['<%= config.sass_path %>/**/*.scss'],
                tasks: ['sass:dev']
            },
            twig: {
                files: ['<%= config.public_path %>/**/*.twig'],
                tasks: ['twig', 'uglify:dev_vendor']
            },
            css: {
                files: ['<%= config.public_path %>/**/*.css'],
                options: {
                    // To use with external server, copy/paste the next script tag
                    // <script src="//localhost:35729/livereload.js"></script>
                    livereload: true
                }
            },
            vendor: {
                files: ['<%= config.vendor_path %>/**/*.js', '<%= config.vendor_path %>/**/*.css'],
                tasks: ['bower_concat', 'uglify:dev_vendor'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    // LOAD GRUNT NPM TASKS
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-twig');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-php');


    // REGISTER TASKS
    // $ grunt // Will trigger "default" task
    // $ grunt compile // Will trigger "compile" task
    // which perform "jshint", "sass", "uglify", "requirejs" tasks

    grunt.registerTask('compile', ["jshint", "bower_concat:prod", "twig", "uglify:prod", "requirejs", "sass:prod", "clean"]);
    grunt.registerTask('watch_tasks', ["jshint", "bower_concat:dev", "twig", "uglify:dev_vendor", "uglify:dev_app", "sass:dev"]);
    grunt.registerTask('watch_php', ["watch_tasks", "php", "watch"]);
    grunt.registerTask('watch_server', ["watch_tasks", "connect", "watch"]);
    grunt.registerTask('watch_no_server', ["watch_tasks", "watch"]);
    grunt.registerTask('default', ["watch_server"]);

};
