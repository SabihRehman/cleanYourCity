cleanYourCity.controller('signInCrtl', function($scope,AlertService, $state,mainFactory) {

    // global Variable
    var vm = this;
    vm.loginData = {};


    // function Initalize
    vm.testfunction = testfunction;
    vm.login = login;



    // call fnction
    testfunction();

    // test function
    function testfunction() {
        console.log("signIn Controller");
    };

    function login() {
        console.log(vm.loginData);
        mainFactory.Login(vm.loginData)
          .then(function (res) {
            if(res.code == 200){
              vm.userInformation = res.content;
              localStorage.setItem("userProfileInFo",JSON.stringify(vm.userInformation));
              $state.go('app.home');
            }
          }).catch(function(){
            AlertService.showAlert('Something went wrong while login')
          });

    };
});
