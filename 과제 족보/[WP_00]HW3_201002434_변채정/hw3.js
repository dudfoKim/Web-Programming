function clearList(){
	localStorage.clear();
}

function addList()
{
 var tl = document.getElementById("list");
 var para=document.createElement('div');
    
  if (!isNaN(localStorage.clickcount))
    {
    localStorage.clickcount=Number(localStorage.clickcount)+1;
    }
  else
    {
    localStorage.clickcount=1;
    }

	para.style.width="100px";
	para.style.height="20px";
	para.style.background="yellow";
	para.style.border="1px solid";

   para.contentEditable="true";
   para.draggable="true";
 para.ondragstart=function() {drag(event)};
 para.id='ohdiv'+ localStorage.clickcount;
 
 var img = document.createElement('img');
img.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSangSNPSjwqyeliFwhLqVnfdYFfGhlu5nSgei0wFqEDa2gmqX-";

img.id='Xbox';
img.onclick= function(){delList(para)};
para.appendChild(img);

 tl.appendChild(para);
para.onmouseover = function(){show(this.firstChild)};
para.onmouseout = function(){hide(this.firstChild)};
}

function delList(para)
{
		localStorage.clickcount = Number(localStorage.clickcount)-1;
		localStorage.removeItem(para.parentNode.id);
		para.remove();
}

function show(a){
a.style.display = "block";
}
function hide(a){
a.style.display = "none";
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
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));

var tdid=ev.target.id;
var listvalue=document.getElementById(data).innerHTML;

if (typeof(Storage) != "undefined")
  {
  localStorage.setItem(tdid,listvalue);
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage...";
  }
}

function readList(){

var num;
for(num=1;num<localStorage.length;num++){
	var i=localStorage.key(num);
	var val=localStorage.getItem(i);

	 var tl = document.getElementById(i);
 var para=document.createElement('div');
para.innerHTML=val;
	
	para.style.width="100px";
	para.style.height="20px";
	para.style.background="yellow";
	para.style.border="1px solid";

   para.contentEditable="true";
   para.draggable="true";
 para.ondragstart=function() {drag(event)};
 
 var img = document.createElement('img');
img.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSangSNPSjwqyeliFwhLqVnfdYFfGhlu5nSgei0wFqEDa2gmqX-";

img.id='Xbox';
img.onclick= function(){delList(para)};
para.appendChild(img);
para.id='ohdiv'+ localStorage.clickcount;

tl.appendChild(para);
para.onmouseover = function(){show(this.firstChild)};
para.onmouseout = function(){hide(this.firstChild)};
}

}