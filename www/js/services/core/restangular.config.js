(function() {

    'use strict';

  cleanYourCity.config(configuration);

    /* @ngInject */
    function configuration(RestangularProvider) {
        var url = 'https://change-pak.herokuapp.com';
        //var url =  "http://localhost:3000/";
        var baseUrl = url + '/api';
        RestangularProvider.setBaseUrl(baseUrl);
    }

}());
