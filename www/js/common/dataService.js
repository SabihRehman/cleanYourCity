cleanYourCity.factory('dataService', function authFactory(Restangular, restAngularWithToken) {

    // initalize Funcrion
    return {

        // Function inatialize
        RegisterUser : RegisterUser,
        login : login,
        getAllEvents : getAllEvents,
        registerEvent : registerEvent,
        eventDetail : eventDetail,
        getPlantaion : getPlantaion


    };

    // Register Api
    function RegisterUser(userdata) {
      return Restangular.all('registerUser').post(userdata);
    }

    // Login Api
    function login(loginData) {
      return Restangular.all('login').post(loginData);
    }

    // All Events Show Api
    function getAllEvents() {
      return Restangular.all('getAll').all('item').post({});
    }

    // Create Event Api
    function registerEvent(eventCreateData) {
      return Restangular.all('register').all('item').post(eventCreateData);
    }

    // Single Event api Detail
    function eventDetail(getEventDetail) {
      return Restangular.all('getSingle').all('item').post(getEventDetail);
    }

    
    // get Plantation Api
    function getPlantaion(data) {
      return Restangular.all('getAll').all('item').post(data);
    }


});
