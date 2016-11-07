(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/languages/locale-',
      suffix: '.json'
    });

    $translateProvider.preferredLanguage('english');
    $translateProvider.useSanitizeValueStrategy(null);

    $locationProvider.html5Mode(true);



  }

})();
