// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'client/vendor/jquery/dist/jquery.js',
      'client/vendor/angular/angular.js',
      'client/vendor/angular-mocks/angular-mocks.js',
      'client/vendor/angular-resource/angular-resource.js',
      'client/vendor/angular-cookies/angular-cookies.js',
      'client/vendor/angular-sanitize/angular-sanitize.js',
      'client/vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
      'client/vendor/lodash/lodash.js',
      'client/vendor/angular-ui-router/release/angular-ui-router.js',
      'client/vendor/angular-animate/angular-animate.js',
      'client/vendor/angular-toastr/dist/angular-toastr.tpls.js',
      'client/vendor/js-data/dist/js-data.js',
      'client/vendor/js-data-http/dist/js-data-http.js',
      'client/vendor/js-data-angular/dist/js-data-angular.js',
      'client/vendor/angular-messages/angular-messages.js',
      'client/vendor/angular-ui-grid/ui-grid.js',
      'client/vendor/moment/moment.js',
      'client/vendor/ng-file-upload/ng-file-upload.js',
      'client/vendor/angular-loading-bar/build/loading-bar.js',
      'client/vendor/ng-file-upload-shim/ng-file-upload-shim.js',
      'client/vendor/ng-img-crop/compile/minified/ng-img-crop.js',
      'client/vendor/ui-select/dist/select.js',
      'client/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/vendor/angular-custom-select/dist/angular-custom-select.min.js',
      'client/vendor/nya-bootstrap-select/dist/js/nya-bs-select.js',
      'client/vendor/angular-wizard/dist/angular-wizard.min.js',
      'client/vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js',
      'client/app/app.js',
      'client/app/**/*.js',
      'client/app/**/*.coffee',
      'client/components/**/*.js',
      'client/components/**/*.coffee',
      'client/app/**/*.jade',
      'client/components/**/*.jade',
      'client/app/**/*.html',
      'client/components/**/*.html'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },


    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
