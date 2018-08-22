cleanYourCity.controller('plantingCrtl', function($scope, $state,$ionicFilterBar,mainFactory ) {

  // global Variable
  var vm = this;
  vm.loginData = {};


  // function Initalize

  vm.showFilterBar = showFilterBar;
  vm.getAllEvents = getAllEvents;
  vm.getPlantation = getPlantaion


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
        console.log(res);
      })
  }

  function getPlantaion(){
     mainFactory.getPlantaion()
      .then(function (res) {
        vm.plantingList  = res.content
        console.log(res);
      })

  }

  // call fnction
  getPlantaion()
  getAllEvents();

});
