cleanYourCity.controller('donationCrtl', function($scope, $state,$ionicFilterBar) {

  // global Variable
  var vm = this;
  vm.loginData = {};


  // function Initalize
  vm.testfunction = testfunction;

  $scope.data = JSON.parse(localStorage.getItem("userProfileInFo"));

  $scope.doCheckout = function(token) {
      alert("Got Stripe token: ");
  };

  // call fnction
  testfunction();

  // test function
  function testfunction() {
    console.log("donationCrtl Controller");
  };
});
