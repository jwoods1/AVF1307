//wait for PhoneGap to load
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
	
  	$('#takePicture').on('click', takePic);


	var takePic = function(){
		navigator.camera.getPicture( pictureTaken, cameraError);
	};
	
	var pictureTaken = function(picture){
		$('<img src="'+picture+'">').appendTo('#image');
	};
	
	var cameraError = function(message){
		alert(message);
	};

    // InAppBrowser

    //Geolocation
    function onGeoSuccess(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			var currentposition = new google.maps.LatLng(lat,lon);
			
			var mapoptions = {
				zoom: 12,
				center: currentposition,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			var map = new google.maps.Map(document.getElementById("map"), mapoptions);
			

			var marker = new google.maps.Marker({
					position: currentposition,
					map: map
			});
		}
 