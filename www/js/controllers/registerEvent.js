cleanYourCity.controller('registerEventCrtl', function($scope, $state,mainFactory) {

  // global Variable
  var vm = this;
  vm.registerEvents = {};
  vm.registerEvents.galleryPics = [];


  // function Initalize
  vm.testfunction = testfunction;
  vm.registerEvent = registerEvent;
  vm.imageUpload = imageUpload;
  vm.singleimageupload = singleimageupload;



  // call fnction
  testfunction();

  // test function
  function testfunction() {
    console.log("registerEventCrtl Controller");
  };

  function registerEvent() {
    vm.registerEvents.key = 0;
    vm.registerEvents.donation = 0;
    if(vm.registerEvents.activityPic == undefined){
      vm.registerEvents.activityPic = "http://res.cloudinary.com/djjmzjgpn/image/upload/v1508576850/garbage_sqhw2f.jpg";
    }
    console.log(vm.registerEvents);
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
            vm.registerEvents.galleryPics.push(vm.profilePic);
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

  function singleimageupload() {
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
            vm.registerEvents.activityPic =response.secure_url;
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
