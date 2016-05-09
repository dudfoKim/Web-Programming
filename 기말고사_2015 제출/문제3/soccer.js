var startday = new Date();
var clockStart = startday.getTime();
var count = 0;

function calctime()
{
	var timeRecursive = setTimeout("getGametime()", 1);
}

function prepare()
{
	var newball = document.createElement("img");
	newball.src = "./soccerball.jpg";
	newball.style.width = "75px";
	newball.style.height = "75px";
	
	var here = document.getElementById("here");
	here.appendChild(newball);
}

function initGametime()
{
	var myTime = new Date(); 
	var timeNow = myTime.getTime();  
	var timeDiff = timeNow - clockStart; 

	this.diffSecs = timeDiff/1000;

	return(this.diffSecs); 
}

function getGametime()
{ 
	var tempTime = initGametime(); 
	var result = tempTime + " ";

	result = result.substring(0, result.indexOf(".")) + " s"; 
	document.getElementById("timer").value = result;
	setTimeout("getGametime()", 1000);
}

function start()
{
	var ball = document.getElementById("ball");
	ball.setAttribute("ondragstart", "drag(event)");
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
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

	this.count++;
	alert(count);
}

function getcount()
{
	var here = document. getElementById("count");
	here.innerHTML = count;
}