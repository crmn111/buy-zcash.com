(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('MainController', MainController);

  function MainController($scope, $translate, $state, $rootScope, $sce, $http, $filter) {
      var vm = this;
      $scope.trades = null;


      $scope.baseUrl = 'https://www.innocoin.com';
      $scope.baseSwapUrl = 'https://swap.innocoin.com/#/';

      $scope.coinMap = {
          'ETH' : 'ETH',
          'ETC' : 'ETH-alt',
          'DASH' : 'DASH',
          'XCP' : 'XCP',
          'SJCX' : 'SJCX',
          'XMR' : 'XMR'
      };

      $http.get('https://api.innocoin.com/v1/latest/24').then(function(response) {

          var resp = response.data;

          for(var x in resp) {
              resp[x]['source.actualAmount'] = setDecimals(resp[x]['source.actualAmount']);
              resp[x]['target.amount']= setDecimals(resp[x]['target.amount']);
          }

          $scope.trades = resp;
      });

      $scope.updateIframes = function(lang) {
          var language = lang || $translate.use();
          $scope.iframe1 =  $sce.trustAsResourceUrl($scope.baseSwapUrl + '?language=' + language + '&partner_email=partner@innocoin.com&partner_name=buy-ether.com&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ZEC&show_info=true&theme=old_mathematics&rounded_corners=true&border=false&iframe=true');
          $scope.iframe2 =  $sce.trustAsResourceUrl($scope.baseUrl + '/trades#language=english&bgcolor=#fff&scheme=light&hidetitle=true&iframe=true&sidepadding=true&overflow=hidden&results=15');
      };


      $scope.setMomentLang = function(lang) {
          if(lang === 'english') {
              moment.locale('en');
          } else {
              moment.locale('zh-cn');
          }
      };

      $scope.changeLang = function(lang) {

          var xlang = (lang === 'english') ? 'en' : 'zh-cn';

          $rootScope.locale = lang;
          $translate.use(lang);

          $state.go('app.root', { 'locale' : lang }).then(function() {
              /*amMoment.changeLocale(xlang);*/
              $scope.setMomentLang(lang);
              $scope.updateIframes(lang);
          });
      };


      $scope.updateIframes($rootScope.locale);

      var setDecimals = function(number) {
          var fraction = (number % 1 != 0) ? 6 : 0;
          return parseFloat($filter('number')(number, fraction));
      }

  }
})();
