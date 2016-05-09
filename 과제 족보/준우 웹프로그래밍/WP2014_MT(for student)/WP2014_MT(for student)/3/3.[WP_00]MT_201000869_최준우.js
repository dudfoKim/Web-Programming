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

function insertList()
{
	try{
		var number = parseInt(prompt("번호를 입력하세요"));
		
		if(isNaN(number)) throw "Not a Number";
		
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
		document.getElementById("List").insertBefore(link, document.getElementById("List").childNodes[number]);
	}
	catch(err)
	{
		alert(err);
	}
}