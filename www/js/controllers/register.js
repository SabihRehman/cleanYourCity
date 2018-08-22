cleanYourCity.controller('registerCrtl', function($scope,$cordovaCamera,Upload, $rootScope,AlertService, $q,cloudinary,$cordovaFileTransfer,authFactory,mainFactory) {

  // global Variable
  var vm = this;
  vm.registerData = {};

  // function Initalize
  vm.testfunction = testfunction;
  vm.registerUserData = registerUserData;
  vm.imageUpload = imageUpload;


  // call fnction
  testfunction();

  // test function
  function testfunction() {
    console.log("register Controller");
  }

  function registerUserData() {
    console.log(vm.registerData);
    
    if(vm.profilePic == undefined){
      vm.registerData.profilePic = "";
    }
    mainFactory.registeruser(vm.registerData)
      .then(function (res) {
        AlertService.showAlert('User register successfull')
      })
      .catch(function(){
        AlertService.showAlert('Something went wrong while register')
      })
  }

  function imageUpload() {
    document.addEventListener("deviceready", function () {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      };

      $cordovaCamera.getPicture(options).then(function(imageURI) {
        var Profile =imageURI;
        var server = 'https://api.cloudinary.com/v1_1/raza03/image/upload';

        //must be included for cloudinary unsigned upload
        var options = {
          'params': {
            'upload_preset': 'nkupdrps'
          }
        };

        $cordovaFileTransfer.upload(server,Profile, options)
          .then(function(result) {

            var response = JSON.parse(result.response);

            //this is your image source https url
            vm.profilePic =response.secure_url;

          }, function(err) {
            console.log(JSON.stringify(err));
            // Error print
          }, function (progress) {
            //progress update
          });
      }, function(err) {
        // error
      });

    }, false);

  }


});
