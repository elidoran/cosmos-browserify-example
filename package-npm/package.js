Package.describe({
  name: 'cosmos:example-package-npm',
  version: '1.0.0',
  summary: 'Example package using cosmos:browserify and npm install',
  git: '',
  documentation: 'README.md'
});

// Not using this, instead, using cli `npm install <module>` to get them
// Npm.depends({});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use(['coffeescript', 'templating'], 'client');

  api.use(['cosmos:browserify@0.9.3'], 'client'); // need this package

  api.addFiles([
      'client/example.html',    // show some example results
      'client/example.coffee',  // package's Meteor script
      'package.browserify.js',           // browserify file
      'package.browserify.options.json'  // browserify options file
    ],
    'client'
  );

  // OPTIONAL:
  //  exports it to app when added to an app
  //  exports it for other packages when they *use* this one
  // Don't export it unless you want another package or an app to get it
  api.export('uppercase', 'client');

});

Package.onTest(function(api) {
  api.use(['tinytest', 'coffeescript', 'cosmos:example-package-npm'], 'client');
  api.addFiles('test/example-tests.coffee', 'client');
});
