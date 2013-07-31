angular.module('App.services', [])
    .factory('cordovaReady', [function () {
        return function (fn) {
            var queue = [],
                impl = function () {
                    queue.push([].slice.call(arguments));
                };

            document.addEventListener('deviceready', function () {
                queue.forEach(function (args) {
                    fn.apply(this, args);
                });
                impl = fn;
            }, false);

            return function () {
                return impl.apply(this, arguments);
            };
        };
    }])
    .factory('accelerometer', function ($rootScope, cordovaReady) {
        return {

            watchAcceleration: cordovaReady(function (onSuccess, onError, options) {
              var options = { frequency: 40 };
              navigator.accelerometer.watchAcceleration(function () {
                 

                var that = this,
                  args = arguments;

                if (onSuccess) {
                  $rootScope.$apply(function () {
                    onSuccess.apply(that, args);
                  });
                }
              }, function () {
                var that = this,
                  args = arguments;

                if (onError) {
                  $rootScope.$apply(function () {
                    onError.apply(that, args);
                  });
                }
              });

            })
      };
})
 

    
