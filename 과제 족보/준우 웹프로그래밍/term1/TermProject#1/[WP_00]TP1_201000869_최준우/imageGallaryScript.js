
var delDiv;
var count1=1;
var count2=1;

function onMain()
{
	document.getElementById("mainMenu").style.display = "block";
}
function outMain()
{
	document.getElementById("mainMenu").style.display = "none";
}
function addList()
{
	try{
		var text1 = prompt("값을 입력하세요");
	
		if(text1===null || text1.search(/\W|\s/g) > -1 || text1==="") throw "invalid ID";
	
		var link=document.createElement("a");
		var li=document.createElement("li");
		var textnode=document.createTextNode(text1);
		li.appendChild(textnode);
		link.appendChild(li)
		link.onclick = function removeList() { 
			var sign = confirm("삭제하시겠습니까?");
			if(sign)
				link.remove();
		};
		document.getElementById("List").appendChild(link);
	}
	catch(err)
	{
		alert(err);
	}
}

function addImg()
{
	document.getElementById("resisBut").style.display="inline";
	document.getElementById("imgFile").style.display="block";
	document.getElementById("removeBut").style.display="none";
	document.getElementById("imgFile").value = null;
	document.getElementById("img").src = "";
	document.getElementById("imgName").value="";
	document.getElementById("inputContents").style.display="block";
}

function imgPreview()
{
	var file = document.getElementById("imgFile").files[0];
	var image = document.getElementById("img");
	
	image.src = window.URL.createObjectURL(file);
}

function imgUpload()
{
	try{
	var file = document.getElementById("imgFile").files[0];
	var division = document.createElement("div");
	division.setAttribute("style", "border:3px solid black;");
	
	var image = document.createElement("img");
	image.setAttribute("src", window.URL.createObjectURL(file));
	image.setAttribute("alt", "abcd");
	image.setAttribute("style", "border:1px solid black;");
	
	var imgName=document.getElementById("imgName").value;
	
	var d = new Date();
	
	var nameString=imgName;
	var dateString= d.toLocaleDateString();
	
	var nameNode=document.createTextNode(nameString);
	var br = document.createElement("br");
	var dateNode=document.createTextNode(dateString);
	
	division.appendChild(image);
	division.appendChild(nameNode);
	division.appendChild(br);
	division.appendChild(dateNode);
	
	division.onclick= function removeDiv() { 
		document.getElementById("removeBut").style.display="inline";
		document.getElementById("resisBut").style.display="none";
		document.getElementById("imgFile").style.display="none";
		document.getElementById("inputContents").style.display="block";
		document.getElementById("img").src = image.src;
		document.getElementById("imgName").value = imgName;
		delDiv=division;
	};
	
	document.getElementById("imgTable").appendChild(division);
	document.getElementById("imgFile").value = null;
	document.getElementById("img").src = "";
	document.getElementById("imgName").value="";
	document.getElementById("inputContents").style.display="none";
	}
	catch(err)
	{
		alert(err);
	}
}

function imgRemove()
{
	try{
	delDiv.remove();
	document.getElementById("imgFile").value = null;
	document.getElementById("img").src = "";
	document.getElementById("imgName").value="";
	document.getElementById("inputContents").style.display="none";
	}
	catch(err)
	{
		alert(err);
	}
}

function alignCenter()
{
	if(count1)
		document.getElementById("contents").setAttribute("align", "center");
	else
		document.getElementById("contents").setAttribute("align", "left");
	count1++;
	count1=count1%2;
}

function alignLine()
{
	if(count2)
		document.getElementById("imgTable").style.width="250px";
	else
		document.getElementById("imgTable").style.width="700px";
	count2++;
	count2=count2%2;
}

function closeInput()
{
	document.getElementById("imgFile").value = null;
	document.getElementById("img").src = "";
	document.getElementById("imgName").value="";
	document.getElementById("inputContents").style.display="none";
}
