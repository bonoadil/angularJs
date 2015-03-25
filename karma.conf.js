module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    logLevel: config.LOG_DEBUG,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-coveralls'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // coverage reporter generates the coverage
    reporters: ['coverage', 'coveralls'],

    preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          'app/components/**/*.js': ['coverage'],
          'app/view*/**/*.js': ['coverage']
    },

      // optionally, configure the reporter
    coverageReporter: {
          type : 'lcovonly',
          dir : 'coverage/'
    }
  });
};
