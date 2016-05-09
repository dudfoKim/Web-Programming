function addList()
{
	try{
		var text1 = prompt("���� �Է��ϼ���");
	
		if(text1===null || text1.search(/\W|\s/g) > -1 || text1==="") throw "invalid ID";
	
		var link=document.createElement("a");
		var li=document.createElement("li");
		var textnode=document.createTextNode(text1);
		li.appendChild(textnode);
		link.appendChild(li)
		link.onclick = function removeList() { 
			var sign = confirm("�����Ͻðڽ��ϱ�?");
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
		var number = parseInt(prompt("��ȣ�� �Է��ϼ���"));
		
		if(isNaN(number)) throw "Not a Number";
		
		var text1 = prompt("���� �Է��ϼ���");
	
		if(text1===null || text1.search(/\W|\s/g) > -1 || text1==="") throw "invalid ID";
	
		var link=document.createElement("a");
		var li=document.createElement("li");
		var textnode=document.createTextNode(text1);
		li.appendChild(textnode);
		link.appendChild(li)
		link.onclick = function removeList() { 
			var sign = confirm("�����Ͻðڽ��ϱ�?");
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