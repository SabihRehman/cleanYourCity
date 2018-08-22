cleanYourCity.factory('mainFactory', function(dataService) {

  return {
    // initalize Funcrion
    registeruser : registeruser,
    Login : Login,
    GetAllEvents : GetAllEvents,
    RegisterEvent : RegisterEvent,
    getPlantaion : getPlantaion
  };

  

  function registeruser(userdata) {
    return dataService.RegisterUser(userdata);
  }

  function Login(loginData) {
   return dataService.login(loginData);
  }

  function GetAllEvents() {
   return dataService.getAllEvents();
  }

  function RegisterEvent(eventCreateData) {
    return dataService.registerEvent(eventCreateData);
  }

  function EventDetail(getEventDetail) {
    return dataService.eventDetail(getEventDetail);
  }
  
  function getPlantaion(data) {
    return dataService.getPlantaion(data);
  }


});
