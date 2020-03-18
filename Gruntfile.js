module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
	removeComments:true,
        collapseWhitespace: true
      },
      files: {
        src: './Homework.html',
        dest: 'dist/Homework.html'
      }
    },
    cssmin:{
      files:{
	src:'./Homework.css',
	dest:'dist/Homework.css'
      }
    },
    uglify:{
	files:{
	  src:'./Homework.js',
	  dest:'dist/Homework.js'
	}
      }
    
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify', ['htmlmin','cssmin','uglify']); 
};
