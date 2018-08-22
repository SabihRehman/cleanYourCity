cleanYourCity.controller('eventInfoCrtl', function ($scope, $state, $ionicFilterBar, mainFactory, authFactory) {

  // global Variable
  var vm = this;
  vm.loginData = {};


  // function Initalize
  vm.testfunction = testfunction;
  vm.eventDetail = eventDetail;
  
  // call fnction
  testfunction();
  
  vm.activityData = authFactory.getdata()

  // test function
  function testfunction() {
    console.log("eventInfoCrtl Controller");
  };

  function eventDetail() {
    var getEventDetail = {
      itemID: "59e9105462fd841bc09b6aed"
    };
    mainFactory.EventDetail(getEventDetail)
      .then(function (res) {
      })
  }

});
