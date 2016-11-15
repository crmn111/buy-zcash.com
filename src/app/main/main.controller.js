(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .controller('MainController', MainController);

  function MainController($scope, $translate, $state, $rootScope, $sce, $http, $filter, myConfig) {
      var vm = this;

      vm.updateIframes = function(lang) {
          var language = lang || $translate.use();
          vm.iframe1 =  $sce.trustAsResourceUrl(myConfig.baseSwapUrl + '?language=' + language + '&partner_email=partner@innocoin.com&partner_name=buy-ether.com&partner_address=3BfKMdyXzG8e8oHCb6YSGVRdASZ3XW6xni&partner_margin=1.25&source=BTC&target=ZEC&show_info=true&theme=old_mathematics&rounded_corners=true&border=false&iframe=true');
          vm.iframe2 =  $sce.trustAsResourceUrl(myConfig.baseUrl + '/trades#language=english&bgcolor=#fff&scheme=light&hidetitle=true&iframe=true&sidepadding=true&overflow=hidden&results=15');
          vm.iframe3 =  $sce.trustAsResourceUrl(myConfig.baseUrl + '/ticker#scheme=dark&bgcolor=#144460&opacity=1&margin=1.25');
      };

      vm.setMomentLang = function(lang) {
          if(lang === 'english') {
              moment.locale('en');
          } else {
              moment.locale('zh-cn');
          }
      };

      vm.changeLang = function(lang) {

          var xlang = (lang === 'english') ? 'en' : 'zh-cn';

          $rootScope.locale = lang;
          $translate.use(lang);

          $state.go('app.root', { 'locale' : lang }).then(function() {
              /*amMoment.changeLocale(xlang);*/
              vm.setMomentLang(lang);
              vm.updateIframes(lang);
          });
      };


      vm.updateIframes($rootScope.locale);

      var setDecimals = function(number) {
          var fraction = (number % 1 != 0) ? 6 : 0;
          return parseFloat($filter('number')(number, fraction));
      }

  }
})();
