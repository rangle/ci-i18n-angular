(function() {
  'use strict';

  angular
    .module('workshop')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $interval, $translate, moment) {
      var vm = this,
        interval;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.now = new Date();
      vm.balance = 75.23;
      vm.percentage = 44;
      vm.$translate = $translate;

      interval = $interval(function () {
        vm.now = new Date();
      }, 1000);
      $scope.$on('$destroy', function () {
        $interval.cancel(interval);
      });
    }
  }

})();
