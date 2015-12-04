(function() {
  'use strict';

  angular
    .module('workshop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, tmhDynamicLocale,moment) {

    $log.debug('runBlock end');
    $rootScope.$on('$translateChangeStart', function (event, locale) {
      tmhDynamicLocale.set(locale.language).then(function ( ) {
        console.log('changed', locale);
      }, function (err){
        console.log(err.message);
      });
      moment.locale(locale.language);
    });
  }

})();
