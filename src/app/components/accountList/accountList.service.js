(function() {
  'use strict';

  angular
    .module('workshop')
    .service('accountList', accountList);

  /** @ngInject */
  function accountList($http, $translate, $rootScope) {
    var vm = this,
      accountsAllLocales;

    vm.accounts = [];
    update();

    vm.update = update;

    $rootScope.$on('$translateChangeStart', function (event, locale) {
      updateLocale(locale.language);
    });

    function updateLocale(given) {
      var locale = given || $translate.use();
      if (accountsAllLocales[locale]) {
        vm.accounts = accountsAllLocales[locale];
      }
    }

    function update() {
      $http.get('/assets/mock-server-data.json').then(function (response) {
        accountsAllLocales = response.data;
        updateLocale();
      });
    }

  }
})();
