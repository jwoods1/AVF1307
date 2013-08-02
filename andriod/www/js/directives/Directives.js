angular.module('inBrowser', [])
.directive("openExternal", function($window){
    return{
        restrict: 'E',
        scope: {
            url : "=",
            exit : "&",
            loadStart : "&",
            loadStop : "&",
            loadError: "&"
        },
        transclude: true,
        template:"<button class='btn' ng-click='openUrl()'><span ng-transclude></span></button>",
        controller: function($scope){

            var wrappedFunction = function(action){
                return function(){
                    $scope.$apply(function(){
                        action();
                    });
                }
            };
            var inAppBrowser;
            $scope.openUrl = function(){
                inAppBrowser = $window.open($scope.url, '_blank', 'location=yes');
                console.log("did it");
                if($scope.exit instanceof Function){
                    inAppBrowser.addEventListener('exit', wrappedFunction($scope.exit));
                }
            };
        }
    };
});