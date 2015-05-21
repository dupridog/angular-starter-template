module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n\n',
        stripBanners: true
      },
      dist: {
        // the files to concatenate
        src: ['src/*.js', 'src/**/*.js'],
        // the location of the resulting JS file
        dest: 'public/js/app.min.js'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/js/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },    
    sass: {
      dist: {
        options: {
          style: 'expanded',
          compass: true,
          sourcemap: 'none',
          lineNumbers: true
        },
        files: {
          'public/styles/styles.css': 'src/sass/styles.sass'
        }
      },
      min: {
        options: {
          style: 'compressed',
          compass: true,
          sourcemap: 'none'
        },
        files: {
          'public/styles/styles.min.css': 'src/sass/styles.sass'
        }
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: 'src/',
        src: [ '**/*.html', '*.html' ],
        dest: 'public/',
        filter: 'isFile'
      },
      images: {
        expand: true,
        cwd: 'src/',
        src: [ 'images/*' ],
        dest: 'public/'
      }
    },
    clean: {
      build: 'public/*'
    },
    watch: {
      all: {
        files: [ 'Gruntfile.js' ],
        tasks: [ 'concat', 'uglify', 'sass', 'copy' ]
      },
      scripts:{
        files: [ 'src/**/*.js', 'src/*.js' ],
        tasks: [ 'clean', 'concat', 'uglify', 'sass', 'copy']
      },
      sass:{
        files: [ 'src/sass/*.sass'],
        tasks: [ 'sass' ]
      }, 
      images: {
        files: [ 'src/images/*'],
        tasks: [ 'copy' ]
      }
    }       
  });



  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('default', ['clean', 'concat', 'uglify', 'sass', 'copy', 'watch']);

};