var count=0;

window.onload = function(){
	var addEvent = document.getElementById("add-event");
	var readnote = document.getElementById("readNote");
	var remove = document.getElementById("noteRemove");
	
	var dayList = document.getElementsByTagName("td");
	var inActiveList = document.getElementsByClassName("inactive");
	
	for (var i = 0; i < dayList.length ; i++)
	{
		dayList[i].setAttribute('ondrop', "drop(event)");
		dayList[i].setAttribute('ondragover', "allowDrop(event)");
		if(i%7==0)
		{
			dayList[i].style.color="red";
		}
		if(i%7==6)
		{
			dayList[i].style.color="blue";
		}
	}
	
	for (var i = 0; i < inActiveList.length ; i++)
	{
		inActiveList[i].removeAttribute('ondrop');
		inActiveList[i].removeAttribute('ondragover');
	}
	
	addEvent.addEventListener('click', function(event) { console.log("asdf");newNote(); }, false);
	readnote.addEventListener('click', function(event) { console.log("asdf");readNote(); }, false);
	remove.addEventListener('click', function(event) { console.log("asdf");noteRemove(); }, false);
	
	if(typeof(Storage)!=="undefined")
	{
		document.getElementById("calendar").innerHTML = localStorage.getItem("table");
		count = localStorage.getItem("count");
		addDiv();
		addCloseBox();
		addOnKey();
	}
	else
		alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
	var notes = document.getElementsByClassName("noteDiv");
	
	for(var i=0; i<notes.length; i++)
	{
		notes[i].style.display = "none";
	}
}


function newNote()
{
	var div=document.createElement("DIV");
	var note=document.createElement("DIV");

	var closeBox=document.createElement("IMG");
	
	
	div.style.margin = "auto";
	div.style.width = "100px";
	div.style.height = "35px";
	
	div.setAttribute("draggable", true);
	div.setAttribute("ondragstart", "drag(event)");
	div.setAttribute("id", '_note'+this.count);
	div.setAttribute("class", "noteDiv");
	
	
	note.style.position = "absolute";
	note.setAttribute("contenteditable", true);
	note.setAttribute("class", "note");
	
	count++;
	
	closeBox.src="closeBox.jpg";
	closeBox.style.position = "absolute";
	closeBox.style.zIndex = "3";
	closeBox.style.display = "none";
	closeBox.setAttribute("class", "closeBox");
	
	div.appendChild(note);
	div.appendChild(closeBox);
	
	note.onkeyup = function()
	{
		if(typeof(Storage)!=="undefined")
		{
			localStorage.setItem("table", document.getElementById("calendar").innerHTML);
			localStorage.setItem("count", count);
		}
		else
			alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
	}
	
	closeBox.onclick = function()
	{
		this.parentNode.remove();
		if(typeof(Storage)!=="undefined")
			{
				localStorage.setItem("table", document.getElementById("calendar").innerHTML);
				localStorage.setItem("count", count);
			}
		else
			alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
	}

	div.onmouseover = function()
	{
		div.getElementsByTagName("img")[0].style.display = "block";
	}
	
	div.onmouseout = function()
	{
		div.getElementsByTagName("img")[0].style.display = "none";
	}
	
	document.getElementById("menu").appendChild(div);
	if(typeof(Storage)!=="undefined")
	{
		//localStorage.setItem("table", document.getElementById("calendar").innerHTML);
		localStorage.setItem("count", count);
	}
	else
		alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
}

function addCloseBox()
{
	var boxes = document.getElementsByClassName("closeBox");
	
	for(var i=0; i<boxes.length; i++)
	{
		boxes[i].onclick = function()
		{
			this.parentNode.remove();
			if(typeof(Storage)!=="undefined")
			{
				localStorage.setItem("table", document.getElementById("calendar").innerHTML);
				localStorage.setItem("count", count);
			}
			else
				alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
		}
	}
}


function addNote()
{
	var notes = document.getElementsByClassName("note");
	
	for(var i=0; i<notes.length; i++)
	{
		notes[i].onkeyup = function()
		{
			if(typeof(Storage)!=="undefined")
			{
				localStorage.setItem("table", document.getElementById("calendar").innerHTML);
				localStorage.setItem("count", count);
			}
			else
				alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
		}
	}
	
	count++;
}

function addDiv()
{
	var divs = document.getElementsByClassName("noteDiv");
	
	for(var i=0; i<divs.length;i++)
	{
		divs[i].onmouseover = function()
		{
			//console.log(this);
			this.getElementsByTagName("img")[0].style.display = "block";
		}
		
		divs[i].onmouseout = function()
		{
			this.getElementsByTagName("img")[0].style.display = "none";
		}
		
	}
}

function addOnKey()
{
	var divs = document.getElementsByClassName("note");
	
	for(var i=0; i<divs.length;i++)
	{
		divs[i].onkeyup = function()
		{
			if(typeof(Storage)!=="undefined")
			{
				localStorage.setItem("table", document.getElementById("calendar").innerHTML);
				localStorage.setItem("count", count);
			}
			else
				alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
		}
	}
}

function noteRemove()
{
	var divs = document.getElementsByClassName("noteDiv");
	console.log(divs.length);
	for(var i=0; i<divs.length;)
	{
		console.log(i);
		divs[i].remove();
	}
	if(typeof(Storage)!=="undefined")
	{
		localStorage.setItem("table", document.getElementById("calendar").innerHTML);
		localStorage.setItem("count", 0);
	}
	else
		alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
		
	count = 0;
}

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	var el = ev.target;
	if(el.className == "noteDiv" || el.className == "note" )
	{
		alert("note가 겹칩니다");
		return;
	}
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	if(typeof(Storage)!=="undefined")
	{
		var table = document.getElementById("calendar").innerHTML;
		localStorage.setItem("table", table);
		localStorage.setItem("count", count);
	}
	else
		alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
}

function readNote()
{
	if(typeof(Storage)!=="undefined")
	{
		document.getElementById("calendar").innerHTML = localStorage.getItem("table");
		count = localStorage.getItem("count");
		addDiv();
		addCloseBox();
		addOnKey();
		var notes = document.getElementsByClassName("noteDiv");
		for(var i=0; i<notes.length; i++)
		{
			notes[i].style.display = "block";
		}
	}
	else
		alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
}


window.onunload = function() {

	if(typeof(Storage)!=="undefined")
	{
		localStorage.setItem("table", document.getElementById("calendar").innerHTML);
		localStorage.setItem("count", count);
	}
	else
		alert("로컬 저장소를 지원 하지 않는 브라우저입니다.");
		

}