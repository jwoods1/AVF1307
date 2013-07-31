angular.module('App.controllers',['ngResource','App.services','ui.bootstrap','openExternal'])
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
  }});
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
  
  $scope.instagram = $resource('https://api.instagram.com/v1/media/popular?client_id=9a456cbcc7f54683a1d9931706d5a3db',
 	  {action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});
 	$scope.instagramResult = $scope.instagram.get();
  $scope.myInterval = 2000;
  
  
}
function TumblrCtrl($scope, $resource){
  $scope.tag = {tag:'GIF'};
  $scope.tumblr = $resource('http://api.tumblr.com/v2/tagged?tag='+$scope.tag.tag+'&api_key=V5UIK7kNJrGaaCPY8hJeLmg8Ipqc96GoxkDDNW6pXpJQgBujng',
    {q:'angularjs',callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});

  $scope.tumblrResult = $scope.tumblr.get(); 
  $scope.myInterval = 2000;

}
function AccelCtrl($scope, accelerometer){
  
   document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
        alert('onError!');
    }
  };
function CameraCtrl($scope){

}
function InAppBrowserController($scope, cordovaReady){
  document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        $("#CheckConButton").on('click',checkConnection());
    }

        function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Connection type: ' + states[networkState]);
        }
    
  }
function GeoCtrl($scope){

}

function DiscussionCtrl($scope){
  $scope.disc1 = "Discussion Week 2";
  $scope.disc2 = "Discussion Week 3";
  $scope.oneAtATime = true;

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}


