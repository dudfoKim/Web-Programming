var divNum = 0;
	
function add()
{
	var newDiv = document.createElement("div");
	var color = document.getElementById("colorValue").value;
	var location = document.getElementById("here");

	
	newDiv.style.backgroundColor = color;
	newDiv.id = "newDiv" + divNum++;
	newDiv.draggable = "true";
	newDiv.style.border = "1px solid black";
	newDiv.style.display = "inline-block";
	newDiv.setAttribute("contenteditable", "true");
	newDiv.style.paddings = "0px";
	newDiv.style.width = "125px";
	newDiv.style.height = "50px";
	newDiv.setAttribute("class","newDivClass");
	newDiv.setAttribute("oninput", "modify()");
	newDiv.setAttribute("ondragstart", "drag(event)");

	location.appendChild(newDiv);

	window.alert("Div를 추가합니다!");
}

function modify()
{	
	localStorage.setItem("table", document.getElementById("timetable").innerHTML);
}

function errorStorage()
{
	window.alert("로컬 저장소를 지원하지 않는 브라우져입니다!");
}

function clearStorage()
{
	window.alert("로컬 저장소를 초기화합니다!");
	
	localStorage.clear();
}

function getStorage()
{
	if(typeof(Storage)!=="undefined")
	{
		window.alert("로컬 저장소에서 시간표를 불러옵니다!");
				
		if(localStorage.length==0)
		{
			window.alert("로컬 저장소에 아무런 값이 없습니다!");
		
			return;
		}
		
		document.getElementById("timetable").innerHTML = localStorage.getItem("table");
		newDiv = document.getElementsByClassName("newDivClass");
		
		for(var index=0; index<newDiv.length; index++)
		{
			newDiv[index].addEventListener("dragstart", drag);
		}
	}
	else
	{
		errorStorage();

		return;
	}
}

function drag(ev)
{
	ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev)
{
    ev.preventDefault();
}

function drop(ev)
{
	var trash = document.getElementById("trash");
	var dropTarget = ev.target;
	
	ev.preventDefault();

	if(dropTarget.className=="newDivClass")
	{
		window.alert("Div가 중복되었습니다!");

		return;
	}
	
	var data = ev.dataTransfer.getData("text");
	
	if(dropTarget.id==trash.id)
	{
		window.alert("로컬 저장소에서 삭제했습니다!");
		dropTarget.appendChild(document.getElementById(data));
		modify();
		
		return;
	}
	
	dropTarget.appendChild(document.getElementById(data));
	modify();
}