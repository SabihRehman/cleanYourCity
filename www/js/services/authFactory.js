cleanYourCity.factory('authFactory', function (dataService) {


  // Global varible
  var filterValue;
  var setSome;
  return {

    // initalize Funcrion
    testFunction: testFunction,
    setdata: setdata,
    getdata: getdata

  };

  // test function
  function testFunction() {
    console.info('This is a test function');
  }

  function setdata(data) {
    setSome = data;
  }
  
  function getdata() {
    return setSome;
  }

});
