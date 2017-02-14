module.exports = function(grunt) {
	/*
	 * Do grunt related things here
	 * Every thing happens inside the wrapper function
	 */

	/** Project configuration **/

	grunt.initConfig({
	  patternprimer: {
	    my_target: {
	      ports: [7020],
	      src: 'patterns',
	      wwwroot: 'public',
	      css: ['global.css']      
	    }
	  }
	});

	/** Load npm tasks from node_modules **/
	grunt.loadNpmTasks('grunt-patternprimer');

	/** Grunt tasks **/
	grunt.registerTask('development', ['patternprimer']);
};

// Don't cross this line ----------------------------------