cleanYourCity.controller('cardInfoCrtl', function($scope, $state) {

  // global Variable
  var vm = this;
  vm.loginData = {};

  // function Initalize
  vm.testfunction = testfunction;

  // call fnction
  testfunction();

  // test function
  function testfunction() {
    console.log("cardInfoCrtl Controller");
  };

});
