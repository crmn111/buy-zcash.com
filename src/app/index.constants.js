/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('buyEther4Com')
    .constant('moment', moment)
    .constant("myConfig", {
      baseUrl: 'https://www.innocoin.com',
      //baseUrl : 'http://localhost:3000',
      baseSwapUrl: 'https://swap.innocoin.com/#/',
      api : 'https://api.innocoin.com/v1/settings'
    });

})();
