function add()
{
	var list = document.getElementById("list");
	var content = document.getElementById("addContent").value;
	var textNode = document.createElement("li");
	textNode.innerHTML = content;
	
	list.appendChild(textNode);
	
	document.getElementById("addContent").value = "";
}

function deleteByIndex()
{
	var list = document.getElementById("list");
	var index = Number(document.getElementById("deleteIndex").value);
	var node = list.childNodes[index];
	
	node.remove();
	
	document.getElementById("deleteIndex").value = "";
}

function replaceList()
{
	var list = document.getElementById("list");
	var content = document.getElementById("replaceContent").value;
	var index = Number(document.getElementById("replaceIndex").value);
	var textNode = document.createElement("li");
	textNode.innerHTML = content;
	
	list.replaceChild(textNode, list.childNodes[index]);
	
	document.getElementById("replaceContent").value = "";
	document.getElementById("replaceIndex").value = "";
}

function linkList()
{
	var list = document.getElementById("list");
	var index = Number(document.getElementById("linkIndex").value);
	var node = list.childNodes[index];
	var linkAddress = document.getElementById("linkAddress").value;
	var link = document.createElement("a");
	link.href = linkAddress;

	window.alert(link);
	
	node.appendChild(link);
}