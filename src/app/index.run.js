(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $translate, $state, $window, $location, $stateParams) {

    $rootScope.test = false;

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.locale = 'english';
    $rootScope.canonical = $location.absUrl();
    $rootScope.date = new Date();

    var abs_url = 'https://www.buy-zcash.com';

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      $translate.use(toParams.locale);
    });

   $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if($stateParams.locale && ['english','chinese'].indexOf($stateParams.locale) !== -1){
        $rootScope.locale = $stateParams.locale;
        $translate.use($stateParams.locale);

          if($stateParams.locale === 'english') {
              moment.locale('en');
          } else {
              moment.locale('zh-cn');
          }
      }

       var browserlang = $window.navigator.language.toLowerCase() || $window.navigator.userLanguage.toLowerCase();

       if (['zh','zh-cn','zh-sg','zh-tw','zh-hk'].indexOf(browserlang) !== -1 && ['english','chinese'].indexOf($stateParams.locale) === -1) {
           $rootScope.locale = 'chinese';
           $translate.use($rootScope.locale);
           moment.locale('zh-cn');
           $window.location = '/chinese';
       }

       $rootScope.canonical = $location.absUrl() === abs_url + '/english' ? abs_url : $location.absUrl();
       $rootScope.$statename = $state.$current.name.replace('.','-');

       document.body.scrollTop = document.documentElement.scrollTop = 0;

    });




  }

})();
