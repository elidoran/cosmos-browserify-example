Package.describe({
  name: 'cosmos:browserify-example2',
  version: '0.1.0',
  summary: 'Second example package using cosmos:browserify',
  git: '',
  documentation: 'README.md'
});

// Declare NPM modules for Meteor to download into .npm/package
Npm.depends({
  'upper-case':'1.1.2'  // module exports a function
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['coffeescript', 'templating'], 'client');

  api.use(['cosmos:browserify'], 'client'); // need this package

  api.addFiles([
      'client/example2.html',
      'client/example2.coffee',
      'browserify.js'
    ],
    'client'
  );

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cosmos:browserify-example');
  api.addFiles('test/example-tests.js');
});
