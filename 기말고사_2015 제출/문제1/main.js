var index = 0;
	
function initialize()
{
	var newDiv = document.createElement("div");
	newDiv.id = "newDiv" + index++;
	newDiv.style.width = "800px";
	newDiv.style.height = "380px";
	newDiv.style.display = "inline-block";
	var homeDiv = document.getElementById("right");
	homeDiv.appendChild(newDiv);

	var temp1 = document.getElementById("latitude").value;
	var temp2 = document.getElementById("longitude").value;

	if(temp1===undefined || temp1==null)
	{
		window.alert("제목을 입력하세요!");
		return;
	}
	if(temp2===undefined || temp2==null)
	{
		window.alert("제목을 입력하세요!");
		return;
	}
	if(isNaN(temp1))
	{
		window.alert("숫자값으로 위도를 입력하세요!");
		return;
	}
	if(isNaN(temp2))
	{
		window.alert("숫자값으로 경도를 입력하세요!");
		return;
	}
	
	var latitude = parseInt(document.getElementById("latitude").value);	
	var longitude = parseInt(document.getElementById("longitude").value);
	var mapCenter = new google.maps.LatLng(latitude, longitude);

	if(latitude<0)
	{
		window.alert("+값으로 위도를 입력하세요!");
		return;
	}
	if(longitude<0)
	{
		window.alert("+값으로 경도를 입력하세요!");
		return;
	}
	if(latitude==null || latitude==undefined)
	{
		window.alert("위도에 대한 정확한 값을 입력하세요!");
		return;
	}
	if(longitude==null || longitude==undefined)
	{
		window.alert("경도에 대한 정확한 값을 입력하세요!");
		return;
	}	
	var mapProp = 
	{
		center:mapCenter,
		zoom:14,
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

	var myCity = new google.maps.Circle(
	{
		center:mapCenter,
		radius:200,
		strokeColor:"#0000FF",
		strokeOpacity:0.8,
		strokeWeight:2,
		fillColor:"blue",
		fillOpacity:0.4
	});

	myCity.setMap(map);
	
	google.maps.event.addListener(myCity, 'click', function()
	{
		myCity.open(map, myCity);
	})
		
	add();
}

function addcontent()
{
	inputclose();
	document.getElementById("addcontent").style.display = "block";
}

function all()
{
	var old = document.getElementById("temp");
	old.style.display = "none";
	
	var show = document.getElementById("right");
	right.style.display = "block;"
}

function add()
{
	var list = document.getElementById("list");
	var content = document.getElementById("title").value;
	
	var textNode = document.createElement("li");
	textNode.innerHTML = content;
	textNode.onclick = function()
	{
		var right = document.getElementById("right");
		right.style.display = "none";
		
		var here = document.getElementById("temp");
		here.style.width = "900px";
		here.style.display = "inline";
		
		var temp = document.createElement("div");
		temp.appendChild(right.childNodes[index-1]);
		here.appendChild(temp);
	}

	if(content===undefined || content==null)
	{
		window.alert("제목을 입력하세요!");
		return;
	}

	list.appendChild(textNode);
	
	document.getElementById("latitude").value = "";
	document.getElementById("longitude").value = "";	
	document.getElementById("title").value = "";
}

function inputclose()
{
	document.getElementById("addcontent").style.display = "none";
	document.getElementById("latitude").value = "";
	document.getElementById("longitude").value = "";	
	document.getElementById("title").value = "";
}

function deleteByIndex()
{
	var temp = prompt("삭제할 지도의 번호를 입력하세요");
	var index = Number(temp);
	
	var list = document.getElementById("list");
	var right = document.getElementById("right");
	
	var node = list.childNodes[index];
	var map = right.childNodes[index];
	
	map.remove();
	node.remove();
	
	document.getElementById("deleteIndex").value = "";
}

function linkList()
{
	var list = document.getElementById("list");

	var link = document.createElement("a");
	link.href = linkAddress;

	window.alert(link);
	
	node.appendChild(link);
}