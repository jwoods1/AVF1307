angular.module("Instagram",['ngResource']);


function instagramCtrl($scope,$resource) {

  var url ="https://api.instagram.com/v1/tags/moto/media/recent?callback=?&amp;client_id=9a456cbcc7f54683a1d9931706d5a3db;min_id=10";
    $scope.instagram = $resource(url,{action:'search.json',q:'angularjs', callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});
    $scope.instagramResult = $scope.instagram.get();
    console.log($scope.instagramResult);
    }


  


 


