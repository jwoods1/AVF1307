//wait for PhoneGap to load
$("#CheckConButton").on("click", function()
	     	{
			 	var unknown = "Connection Unknown";
			 	var ethernet = "Connection Ethernet";
			 	var wifi = "Connection Wifi";
			 	var g2 = "Connection 2G";
			 	var g3 = "Connection 3G";
			 	var g4 = "Connection 4G";
			 	var none = "Connection None";
					     	
			     switch(navigator.network.connection.type)
			     {
				     case Connection.UNKNOWN:
					     $("#connectionID").attr('value', unknown);
					     break;
				     
				     case Connection.ETHERNET:
					     $("#connectionID").attr('value', ethernet);
					     break;
				     
				     case Connection.WIFI:
					     $("#connectionID").attr('value', wifi);
					     break;
				     
				     case Connection.CELL_2G:
					     $("#connectionID").attr('value', g2);
					     break;
				     
				     case Connection.CELL_3G:
					     $("#connectionID").attr('value', g3);
					     break;
				     
				     case Connection.CELL_4G:
					     $("#connectionID").attr('value', g4);
					     break;
					 case Connection.NONE:
					     $("#connectionID").attr('value', none);
					     break;			     
			     }
	         });
var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }
