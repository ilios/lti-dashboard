'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const env = EmberApp.env() || 'development';
  const isProductionLikeBuild = ['production', 'staging', 'preview'].indexOf(env) > -1;
  const isTestBuild = env === 'test';

  const app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['ilios-icon.png'],
      enabled: isProductionLikeBuild,
    },
    sourcemaps: {
      enabled: true,
    },
    minifyCSS: { enabled: isProductionLikeBuild },
    minifyJS: { enabled: isProductionLikeBuild },

    tests: env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,
    hinting: isTestBuild,
    babel: {
      plugins: [require('ember-auto-import/babel-plugin')],
    },
    postcssOptions: {
      compile: {
        extension: 'scss',
        enabled: true,
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
          },
        ],
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: require('autoprefixer'),
          },
        ],
      },
    },
    autoImport: {
      publicAssetURL: '/assets',
    },
    'ember-fetch': {
      preferNative: true,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
