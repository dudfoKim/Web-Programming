function addList()
{
	var task = prompt("Please add the task", "");

	if(task=="" || task==null || !(isNaN(task)))
	{
		window.alert("inCorrect task!");
		
		return;
	}
	
	add(task, -1);
}

function addByIndex()
{
	var index = prompt("Please fill the index  (index) ", "");
	
	if(index=="" || index==null || (isNaN(index)))
	{
		window.alert("inCorrect index ! (index) ");
		
		return;
	}
	
	var task = prompt("Please add the task (index) ", "");

	if(task=="" || task==null || !(isNaN(task)))
	{
		window.alert("Corret task! (index) ");
	
		return;
	}

	add(task, index);
}

function add(task, index)
{
	var list = document.getElementById("list");
	
	var textNode = document.createElement("li");
	textNode.innerHTML = task;
	
	textNode.onclick = function()
	{
		var check = confirm("Do you wanna delete this element?");
		
		if(check)
		{
			this.remove();
		}
	}
	
	if(index==-1)
	{
		list.appendChild(textNode);
	}
	else
	{
		list.insertBefore(textNode, list.childNodes[index]);
	}
}