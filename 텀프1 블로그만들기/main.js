var imageIndex=-1;

function showMenu()
{
	document.getElementById("dropdown").style.display = "block";
	document.getElementById("dropdown").style.cursor = "hand";
}

function hiddenMenu()
{
	document.getElementById("dropdown").style.display = "none";
}

function index()
{
	var temp = prompt("새로운 사진을 몇 번째 사진 뒤에 추가하시겠습니까?", "");

	if(isNaN(temp))
	{
		window.alert("Index에 숫자를 입력하세요!");

		return;
	}
	else if(temp=="" || temp==null)
	{
		window.alert("Index에 값을 입력하세요!");
		
		return;
	}
	else if(temp>=myList.childNodes.length)
	{
		window.alert("Index에 더 작은 숫자를 입력하세요!");
		window.alert("현재 등록된 게시물의 갯수가 " + temp + "보다 더 작습니다!");
		
		return;
	}
	else if(temp<0)
	{
		window.alert("Index에 양수의 숫자를 입력하세요!");

		return;
	}

	var insertIndex = Number(temp);

	/*
	여기서 사용하는 개념은 insertbefore 개념인데, 나는 prompt에서는 n번째 게시물 뒤에 추가하는 물음으로 설정했다.
	따라서 물음에 맞게 imageIndex 값에 +1을 해주면, 값에 맞게 게시물을 등록할 수 있다.
	만약 propmt에 Index 값으로 0을 입력하면 맨 앞에 게시물이 등록된다.
	*/
	imageIndex = insertIndex + 1;

	addSomething();
}

function addSomething()
{
	closeWindow();
	document.getElementById("addWindow").style.display = "block";
	document.getElementById("subButton").style.display = "inline";
	document.getElementById("attachImage").style.display = "block";
}

function attachImage()
{
	var fileopen = document.getElementById("attachImage").files[0];
	var images = document.getElementById("showImage");
	var objectURL = window.URL.createObjectURL(fileopen);
	images.src = objectURL;
}

function submit()
{
	var listIndex;
	var Deletebutton = document.createElement("Button");
	Deletebutton.innerHTML = "게시물 삭제";
	Deletebutton.style.float = "right";
	
   	var comment = document.createElement("p");
	var commentDiv = document.createElement("DIV");
	var commentId = document.createElement("Input");
	commentId.style.width = "100px";
	var commentArea = document.createElement("Input");
	commentArea.style.width = "150px";
	var commentInput = document.createElement("Button");
	commentInput.innerHTML = "댓글 등록";
	
	commentDiv.appendChild(commentId);
	commentDiv.appendChild(commentArea);
	commentDiv.appendChild(commentInput);
	
	var myDiv = document.createElement("DIV");
	var Title = document.getElementById("imageTitle").value;
	var images = document.getElementById("showImage");   
	var mylist = document.getElementById("myList");
	var description = document.getElementById("description").value;
	var now = new Date();
	
	if(Title==="" || Title===null)
	{
		window.alert("제목을 입력하세요!");
	}
	else if(!description)
	{
		window.alert("게시물 내용을 입력하세요!");
	}
	else if(document.getElementById("attachImage").files[0]===undefined)
	{
		window.alert("추가할 이미지를 선택하세요!");
	}
	else
	{
		var today = now.getFullYear()+"년 "+(now.getMonth()+1)+"월 "+now.getDate()+"일 " + now.getHours() + "시 " + now.getMinutes() + "분 " + now.getSeconds() + "초";
		var theday = document.createElement("P");
		var title = document.createElement("P");
		var files = document.getElementById("attachImage");
		var countIndex = 0;
		var contentDiv = document.getElementById("content");

		theday.innerHTML = today;
		title.innerHTML = "< " + Title + " >";
		myDiv.innerHTML = "[ 제목 : " + Title + " ]";
		
		myDiv.appendChild(Deletebutton);
		myDiv.appendChild(theday);
		
		while(files.files[countIndex])
		{
			var temp = files.files[countIndex];
			var objectURL = window.URL.createObjectURL(temp);
			var photo = document.createElement("IMG");
		   
			photo.width = 300;
			photo.height = 300;
			images.src = objectURL;
			photo.src = images.src;
			photo.style.border = "2px solid #F8FFFF";
		   
			myDiv.appendChild(photo);
			
			countIndex++;
		}

      	if(imageIndex==-1)
		{
			listIndex = mylist.appendChild(title);
			listIndex.style.cursor = "hand";
			temp = mylist.id;
			contentDiv.appendChild(myDiv);

			listIndex.onclick = function()
			{
				scrollTo(0, myDiv.offsetTop); 
			}
		}
		else
		{
			mylist.insertBefore(title, mylist.childNodes[imageIndex]);
			listIndex = mylist.childNodes[imageIndex];
			listIndex.href = "mylist";
			
			contentDiv.insertBefore(myDiv, contentDiv.childNodes[imageIndex]);
			
			listIndex.onclick = function()
			{
				scrollTo(0, myDiv.offsetTop); 
			}
		}
		
		closeWindow();
	}

	imageIndex=-1;
	
	var inText = document.createElement("p");
	inText.innerHTML = description;

	myDiv.appendChild(inText);
	myDiv.style.padding = "1px";
	myDiv.style.border = "solid 2px #D4F4FA";
   	myDiv.appendChild(commentDiv);

	Deletebutton.onclick = function()
	{
		var boardDelete = confirm("게시물을 삭제하시겠습니까?");

		if(boardDelete==true)
		{
			this.parentNode.remove();
		}
		else
		{
			return;
		}
			
		listIndex.remove();
		this.parentElement.remove();
	}
	
	var commentIndex = 1; 

	commentInput.onclick = function()
	{
		commentIndex++;
		
		var tempButton = document.createElement("Button");
		var commentNewDiv = document.createElement("DIV");
		var tempNow = new Date();
		var tempToday = tempNow.getFullYear()+"년 "+(tempNow.getMonth()+1)+"월 "+ tempNow.getDate()+"일 " + tempNow.getHours() + "시 " + tempNow.getMinutes() + "분 " + tempNow.getSeconds() + "초&nbsp;&nbsp;&nbsp;";
		var tempTime = document.createElement("P");

		tempTime.innerHTML = tempToday;
		tempTime.style.display = "inline";
		tempButton.innerHTML = "댓글 삭제";

		if(commentId.value=="" || commentId.value==null)
		{
			window.alert("등록자를 입력하세요!");
			
			return;
		}
		else if(commentArea.value=="" || commentArea.value==null)
		{
			window.alert("댓글 내용을 입력하세요!");
			
			return;
		}
		
		commentNewDiv.style.width = "100%";
		commentNewDiv.innerHTML = "등록자 : " + commentId.value + " / &nbsp;댓글 내용 : " + commentArea.value + "&nbsp;&nbsp;&nbsp;";
		commentNewDiv.style.marginTop = "10px";
		commentNewDiv.appendChild(tempTime);
		commentNewDiv.appendChild(tempButton);
		commentNewDiv.style.border = "2px solid #F2FFEB";

		commentDiv.insertBefore(commentNewDiv, commentDiv.childNodes[commentIndex-2]);

		commentId.value = "";
		commentArea.value = "";

		tempButton.onclick = function()
		{
			var commentDelete = confirm("댓글을 삭제하시겠습니까?");
			
			if(commentDelete==true)
			{
				this.parentNode.remove();
			}
			else
			{
				return;
			}
		}
	}
}

function closeWindow()
{
	document.getElementById("addWindow").style.display = "none";
	var title = document.getElementById("imageTitle");
	var description = document.getElementById("description"); 
	var image = document.getElementById("attachImage");

	title.value = null;
	description.value = null;
	image.value = null;
}