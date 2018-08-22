cleanYourCity.factory('restAngularWithToken', function(Restangular, $ionicPopup, $window, $state, $injector, $rootScope, $ionicHistory) {


    $rootScope.myGoBack = function() {
        $ionicHistory.goBack();
    };
    $rootScope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft()
    }
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setFullRequestInterceptor(function(element, operation, route, url, headers) {
            var header = {};
            return {
                headers: _.extend(headers, header)
            };
        });

    });

});
