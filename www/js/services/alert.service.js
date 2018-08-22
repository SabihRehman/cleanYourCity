cleanYourCity.factory('AlertService', function (dataService, $ionicPopup) {

  return {
    // initalize Funcrion
    showAlert : showAlert
  };

  function showAlert( msg ) {
    var alertPopup = $ionicPopup.alert({
        title: 'Alert',
        template: '<span style="text-align:center"> '+ msg +'</span>'
    });

    alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
    });
   };
});