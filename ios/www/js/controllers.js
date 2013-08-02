angular.module('App.controllers',['ngResource','App.services','ui.bootstrap','inBrowser'])
 .directive("bootstrapNavbar", function() {
  return {
    restrict: "E",
    replace: true,
    transclude: true,
    templateUrl: "partials/bootstrapNavbar.html",
    compile: function(element, attrs) {  // (1)
      var li, liElements, links, index, length;
 
      liElements = $(element).find("#navigation-tabs li");   // (2)
      for (index = 0, length = liElements.length; index < length; index++) {
        li = liElements[index];
        links = $(li).find("a");  // (3)
        if (links[0].textContent === attrs.currentTab) $(li).addClass("active"); // (4)
      }
    }
  }})
 
function iconCtrl($scope){
  $scope.images = [
      {image : 'img/Camera.png', description : 'Camera'},
      {image : 'img/Clipboard.png', description : 'Capture'},
      {image : 'img/Arrow-right.png', description : 'Accelerometer'},
      {image : 'img/Folder.png', description : 'Storage'},
      {image : 'img/icon.png', description : 'Geolocation'},
      {image : 'img/Internet.png', description : 'InAppBrowser'},
      {image : 'img/Media.png', description : 'Media'},
      {image : 'img/Gears.png', description : 'Discussions'}
  ];
}
function InstagramCtrl($scope, $resource, cordovaReady){
 // https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&?access_token=283019351.f59def8.5190abe4887d4a2f8fb1f623c2588237
  $scope.instagram = $resource('https://api.instagram.com/v1/media/popular?client_id=9a456cbcc7f54683a1d9931706d5a3db',
 	  {action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});
 	$scope.instagramResult = $scope.instagram.get();
  $scope.myInterval = 2000;
  //https://api.instagram.com/v1/media/popular?client_id=9a456cbcc7f54683a1d9931706d5a3db
  
}
function TumblrCtrl($scope, $resource){
  $scope.tag = {tag:'GIF'};
  $scope.tumblr = $resource('http://api.tumblr.com/v2/tagged?tag='+$scope.tag.tag+'&api_key=V5UIK7kNJrGaaCPY8hJeLmg8Ipqc96GoxkDDNW6pXpJQgBujng',
    {q:'angularjs',callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});

  $scope.tumblrResult = $scope.tumblr.get(); 
  $scope.myInterval = 2000;

}
function AccelCtrl($scope){
  
  document.addEventListener("deviceready", loaded, false);
// PhoneGap is ready
function loaded() {
    startWatch();
}
// Start watching the acceleration
function startWatch() {
    // Update acceleration every 3 seconds
    var options = { frequency: 40 };
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
// Stop watching the acceleration
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}
// Success
function onSuccess(acceleration) {
    var element = document.getElementById('accelerometer');
    element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
                        'Acceleration Y: ' + acceleration.y + '<br />' +
                        'Acceleration Z: ' + acceleration.z;
}
 // Error
function onError() {
    alert('onError!');
}

  };

function GeoCtrl($scope, cordovaReady){
    navigator.geolocation.getCurrentPosition(onSuccess,onError,{enableHighAccuracy:true});
   
    function onSuccess(position) {
     $scope.lat = position.coords.latitude;
     $scope.lon = position.coords.longitude;
      var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           +$scope.lat+ '<br />' +
                            'Longitude: '          +$scope.lon+ '<br />';
      var GMap = 'https://maps.google.com/maps?q='+position.coords.latitude+','+position.coords.longitude; 
      $scope.url = GMap;  

    }
    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    //$scope.attitude = position.coords.latitude.toFixed(2);
    //$scope.longitude = position.coords.longitude.toFixed(2);
    //$scope.google = $resource("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ lattitude +","+ longitude +"&radius=10000&types=&sensor=false&key=AIzaSyBFStFK_Q3ggUl8T-4zRj9SP77-gToaWKY");
    
}
function InAppBrowserController($scope){
 
   
   $scope.url = "http://www.fullsail.edu"; 
    $scope.actions = [];
    $scope.closeBrowser = function(){
        $scope.actions.push("Closed Browser");
    };
    $scope.loadStart = function(){
        $scope.actions.push("Load Start");
    }   ;
    $scope.loadStop = function(){
        $scope.actions.push("Load Stop");
    };
    $scope.loadError = function(){
        $scope.actions.push("Load Error");
    };
     

  }

 function CameraCtrl($scope){

 }
function DiscussionCtrl($scope){
  $scope.disc1 = "Discussion Week 2";
  $scope.disc2 = "Discussion Week 3";
  $scope.disc3 = "Discussion Week 4";
  $scope.oneAtATime = true;

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}


