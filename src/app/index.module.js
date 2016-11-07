(function() {
  'use strict';

  angular
    .module('buyEther4Com', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'pascalprecht.translate','angularMoment']);
    moment.locale('zh-cn', {
      relativeTime : {
        future : '%s内',
        past : '%s前',
        s : '几秒',
        m : '1 分钟',
        mm : '%d 分钟',
        h : '1 小时',
        hh : '%d 小时',
        d : '1 天',
        dd : '%d 天',
        M : '1 个月',
        MM : '%d 个月',
        y : '1 年',
        yy : '%d 年'
      }
    });

    moment.locale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'A few seconds',
        m: 'A minute',
        mm: '%d minutes',
        h: 'An hour',
        hh: '%d hours',
        d: 'A day',
        dd: '%d days',
        M: 'A month',
        MM: '%d months',
        y: 'A year',
        yy: '%d years'
      }
    });

})();
