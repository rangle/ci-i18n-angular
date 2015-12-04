(function() {
  'use strict';

  angular
    .module('workshop')
    .filter('percent', percentFilter);

  /** @ngInject */
  function percentFilter($translate) {

    function filter(input, givenLocale) {
      var locale = givenLocale || $translate.use();
      if (locale === 'fr') {
        return input + ' %';
      }
      return input + '%';
    }
    return filter;
  }

})();
