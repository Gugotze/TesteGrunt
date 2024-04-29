module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'src/main.less'
                }
            },
            production: {
                options: {},
                files: {
                    'main.min.css': 'src/main.less'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: ['main.css'],
                    dest: 'dist/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['*.js', '!*.min.js'],
                    dest: 'dist/',
                    ext: '.min.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', ['less', 'cssmin', 'uglify']);
    grunt.registerTask('default', ['build']);
};
