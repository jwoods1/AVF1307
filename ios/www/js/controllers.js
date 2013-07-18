angular.module('App.controllers',['ngResource','infinite-scroll']);
function iconCtrl($scope){
  $scope.images = [
      {image : 'img/Camera.png', description : 'Camera'},
      {image : 'img/Clipboard.png', description : 'Capture'},
      {image : 'img/Arrow-right.png', description : 'Accelerometer'},
      {image : 'img/Folder.png', description : 'Storage'},
      {image : 'img/icon.png', description : 'Geolocation'},
      {image : 'img/Internet.png', description : 'InAppBrowser'},
      {image : 'img/Media.png', description : 'Media'},
      {image : 'img/Gears.png', description : 'APIs'}
  ];
};
 function InstagramCtrl($scope, $resource){
 	$scope.instagram= $resource('https://api.instagram.com/v1/media/popular?client_id=9a456cbcc7f54683a1d9931706d5a3db',
 		{action:'search.json', q:'angularjs', callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});
 	
 	$scope.instagramResult = $scope.instagram.get();
}
function TwitterCtrl($scope, $resource){
  $scope.twitter = $resource('http://thecadmus.com/api/twitter/statuses/10?key=3a23b0a6-f653-1274-4a34-1abbd4c267c8',
    {action:'search.json',q:'angularjs',callback:'JSON_CALLBACK'},{get:{method:'JSONP'}});

  $scope.twitterResult = $scope.twitter.get();   
}

// Twetter    nyudUtZWErXcdYGvxZlg token    564805951-Zuhvx9AoDV9RKLG1gT8Aqbn0IoZFE3Rg7dAqvaMv Secret TAmpI2oSiCCatSjua4VP5MbCKrkniyWSoueyj1JU

//3a23b0a6-f653-1274-4a34-1abbd4c267c8