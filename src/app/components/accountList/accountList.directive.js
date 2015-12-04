(function() {
  'use strict';

  angular
    .module('workshop')
    .directive('accountList', accountList);

  /** @ngInject */
  function accountList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/accountList/accountList.html',
      scope: {
          creationDate: '='
      },
      controller: AccountListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AccountListController(accountList) {
      var vm = this;
      vm.accountList = accountList;
    }
  }

})();
