(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      abstract: true,
      url: '/{locale}',
      template: '<ui-view/>'
    })
      .state('app.root', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        data: {
          english : {
            pageTitle : 'Buy Zcash/ ZEC',
            pageDescription : 'Buy Zcash with Bitcoin on buy-zcash.com. Zcash (ZEC) is a tradeable private asset.'
          }
        }
      });


    $urlRouterProvider.otherwise('/');
  }

})();
