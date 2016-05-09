var index = 0;
	
function initialize()
{
	var newDiv = document.createElement("div");
	newDiv.id = "newDiv" + index++;
	newDiv.style.width = "300px";
	newDiv.style.height = "380px";
	newDiv.style.border = "1px solid black";
	newDiv.style.display = "inline-block";
	var homeDiv = document.getElementById("right");
	homeDiv.appendChild(newDiv);

	var latitude = parseInt(document.getElementById("latitude").value);	
	var longitude = parseInt(document.getElementById("longitude").value);
	var zoomNum = parseInt(document.getElementById("zoom").value);
	var mapCenter = new google.maps.LatLng(latitude, longitude);
	var infoContent = document.getElementById("content").value;
		
	var mapProp = 
	{
		center:mapCenter,
		zoom:zoomNum,
		panControl:true,
		zoomControl:true,
		mapTypeControl:true,
		scaleControl:true,
		streetViewControl:true,
		overviewMapControl:true,
		rotateControl:true,  
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
		
	var map = new google.maps.Map(newDiv, mapProp);

	var marker = new google.maps.Marker({
		position:mapCenter
	});

	marker.setMap(map);

	var infowindow = new google.maps.InfoWindow({

		content:infoContent
	})

		google.maps.event.addListener(marker, 'click', function()
		{
			infowindow.open(map, marker);
		})
}