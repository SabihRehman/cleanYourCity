cleanYourCity.controller('shellCrtl', function($scope, $state,$ionicFilterBar,authFactory,Analytics) {

  // global Variable
  var vm = this;

  // function Initalize
  vm.testfunction = testfunction;
  vm.userIInfo = userIInfo;
  // call fnction
  testfunction();
  userIInfo();

  Analytics.trackPage('shellView');

  // test function
  function testfunction() {
    console.log("shell Controller");
  };

  function userIInfo() {
    vm.userInformation = JSON.parse(localStorage.getItem("userProfileInFo"));
  }


});
