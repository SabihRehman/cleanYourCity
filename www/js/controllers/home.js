cleanYourCity.controller('homeCrtl', function($scope,$ionicFilterBar,authFactory,$ionicSlideBoxDelegate) {

  // global Variable
  var vm = this;

  // function Initalize
  vm.testfunction = testfunction;
  vm.userIInfo = userIInfo;


  vm.slideImages = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
  $ionicSlideBoxDelegate.update();

  // call fnction
  testfunction();
  userIInfo();

  // test function
  function testfunction() {
    console.log("home Controller");
  }

  function userIInfo() {
    vm.userInformation = JSON.parse(localStorage.getItem("userProfileInFo"));
  }
});