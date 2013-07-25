angular.module('App.controllers',['ngResource','App.services']);
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
};
 function InstagramCtrl($scope, $resource){
 	$scope.instagram= $resource('https://api.instagram.com/v1/media/popular?client_id=9a456cbcc7f54683a1d9931706d5a3db',
 		{action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});
 	
 	$scope.instagramResult = $scope.instagram.get();
}
function TumblrCtrl($scope, $resource){
  $scope.tag={tag:'popular'};
  $scope.tumblr = $resource('http://api.tumblr.com/v2/tagged?tag='+$scope.tag.tag+'&api_key=V5UIK7kNJrGaaCPY8hJeLmg8Ipqc96GoxkDDNW6pXpJQgBujng',
    {q:'angularjs',callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});

  $scope.tumblrResult = $scope.tumblr.get(); 

}
function AccelCtrl($scope, accelerometer){
  
  var options= {frequency: 40 };
  accelerometer.watchAcceleration(function (acceleration, options){
    $scope.X =acceleration.x;
    $scope.Y =acceleration.y;
    $scope.Z =acceleration.z;
    $scope.T =acceleration.timestamp;       
        
  });

};
function CameraCtrl($scope, camera){

}
function BrowserCtrl($scope){

}
function GeoCtrl($scope, position){

}

function DiscussionCtrl($scope){
  $scope.disc1 = "Discussion Week 1";
}
