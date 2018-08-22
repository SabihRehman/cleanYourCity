cleanYourCity.controller('cleaningCrtl', function($scope, $state,$ionicFilterBar,mainFactory, authFactory) {

  // global Variable
  var vm = this;
  vm.loginData = {};


  // function Initalize
  vm.testfunction = testfunction;
  vm.showFilterBar = showFilterBar;
  vm.getAllEvents = getAllEvents;
  vm.setData = setData;
  


  // call fnction
  testfunction();
  getAllEvents();
  function setData(data) {
    authFactory.setdata(data);
  }

  // test function
  function testfunction() {
    console.log("cleaningCrtl Controller");
  };
  function showFilterBar() {
    var filterBarInstance = $ionicFilterBar.show({
      cancelText: "<i class='ion-ios-close-outline'></i>",
      items: $scope.places,
      update: function (filteredItems, filterText) {
        $scope.places = filteredItems;
      }
    });
  }

  function getAllEvents() {
    mainFactory.GetAllEvents()
      .then(function (res) {
        vm.data = res.content;
        console.log(vm.data);
      })
  }

});