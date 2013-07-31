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