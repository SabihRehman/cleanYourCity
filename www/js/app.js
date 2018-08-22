// angular.module is a global place for creating, registering and retrieving Angular modules
var cleanYourCity = angular.module('cleanYourCity', [
  'ionic',
  'ion-floating-menu',
  'ngMessages',
  'ngAnimate',
  'ngSanitize',
  'restangular',
  'jett.ionic.filter.bar',
  'ngCordova',
  'cloudinary',
  'ngFileUpload',
  'angular-google-analytics',
  'stripe.checkout'
])

cleanYourCity.run(function($ionicPlatform,StripeCheckout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



cleanYourCity.config(function($stateProvider, $urlRouterProvider,AnalyticsProvider) {

  AnalyticsProvider.setAccount('UA-103955165-1');

  $stateProvider

  // shell or Main Route
    .state('app', {url: '/app', abstract: true, templateUrl: 'templates/shell.html', controller: 'shellCrtl as vm'})

    // Shell Home Route
    .state('app.home', {url: '/home', views: {'menuContent': {templateUrl: 'templates/home.html', controller: 'homeCrtl as vm'}}})

    //login Rounte
    .state('login', {url: '/login',               templateUrl: 'templates/login.html', controller: 'signInCrtl as vm'})

    // register route
    .state('register', {url: '/register',         templateUrl: 'templates/register.html', controller: 'registerCrtl as vm'})

    // cardInfo route
    .state('cardInfo', {url: '/cardInfo',         templateUrl: 'templates/cardInfo.html', controller: 'cardInfoCrtl as vm'})

    // Donation Route
    .state('donation', {url: '/donation',         templateUrl: 'templates/donation.html', controller: 'donationCrtl as vm'})

    // Cleaning Route
    .state('cleaning', {url: '/cleaning',         templateUrl: 'templates/cleaning.html', controller: 'cleaningCrtl as vm'})

    // Planting Route
    .state('planting', {url: '/planting',         templateUrl: 'templates/planting.html', controller: 'plantingCrtl as vm'})

    // eventInfo Route
    .state('eventInfo', {url: '/eventInfo',       templateUrl: 'templates/eventInfo.html', controller: 'eventInfoCrtl as vm'})


    // RegisterEvents Route
    .state('registerEvent', {url: '/registerEvent',templateUrl: 'templates/registerEvent.html', controller: 'registerEventCrtl as vm'})

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
