////Drop Down Gallery Menu ////
function showMenu(){
	document.getElementById("hiddenMenu").style.display="block";
}
function hideMenu(){
	document.getElementById("hiddenMenu").style.display="none";
}

////////////Writing Form 초기화///////////////
function init(){				
	document.getElementById("wrapperSubject").value ="";
	document.getElementById("image").src ="";	
	document.getElementById("inputImage").value ="";
}
/////////////////////////////////////////////

/////////////////이미지 보기를 위한 function ///////////////
function showContents(item){
	init();
	document.getElementById("deleteButton").style.display = "inline";
	document.getElementById("submitButton").style.display = "none";
	document.getElementById("inputImage").style.display = "none";
	document.getElementById("image").src = item.childNodes[0].src;
	document.getElementById("wrapperSubject").value = item.childNodes[1].innerHTML;
	document.getElementById("newContent").style.display = "block";
	document.getElementById("deleteButton").onclick = function() {
		deleteContents(item);	
	}
}
////////////////////////////////////////////////////////

//////////////////////////Writing Form을 띄우기 위한 function/////////////////
function openContents(){
	init();
	document.getElementById("deleteButton").style.display = "none";
	document.getElementById("submitButton").style.display = "inline";
	document.getElementById("inputImage").style.display = "block";
	document.getElementById("newContent").style.display = "block";
}
//////////////////////////////////////////////////////////////////////////////

////////////////////////Writing Form을 닫기 위한 function///////////////////////
function closeContents(){
	document.getElementById("newContent").style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////

///////////////////////게시물 삭제를 위한 function/////////////////////////////
function deleteContents(item){
	item.remove();
	closeContents();		
}
///////////////////////////////////////////////////////////////////////////////

/////////////////////////파일 선택시 URL을 연결 시켜 주는 부분/////////////
function fileSelected(){
	var file = document.getElementById('inputImage').files[0];
	var image = document.getElementById('image');
	image.src = window.URL.createObjectURL(file);
}
///////////////////////////////////////////////////////////////////////////

///////////////////////////////이미지 등록을 위한 함수/////////////////////////
function submit(){
	/////////달력////////////	javascript Date() 함수를 이용함.
	var currentNow = new Date();
	var theYear = currentNow.getFullYear();
	var theMonth = currentNow.getMonth()+1;
	var theDate = currentNow.getDate();
	/////////////////////////	
	
	if(document.getElementById("wrapperSubject").value === "" ){		//null값이 들어 올 경우 예외처리
		alert("제목을 입력하시오!");
	}
	else if(document.getElementById('inputImage').files[0] === undefined){	//Chrome에서 입력이 들어 오지 않았을 경우
		alert("이미지를 입력하시오!");
	}
	else if(document.getElementById('inputImage').files[0] === null){	//Internet Explorer에서 입력이 들어 오지 않았을 경우
		alert("이미지를 입력하시오!");
	}
	else{
		var item = document.getElementById("collectionOfPost");
		var postWrapper = document.createElement("div"); 
		var postImg = document.createElement("img");
			postImg.setAttribute("class","contentsImage");
			postImg.src = window.URL.createObjectURL(document.getElementById('inputImage').files[0]);
		var postSubject = document.createElement("p");
			postSubject.innerHTML = document.getElementById("wrapperSubject").value;
		var postDate = document.createElement("p");
			postDate.innerHTML = theYear+"년" +theMonth+"월"+theDate+"일";
			postWrapper.setAttribute("class","contents");
			postWrapper.appendChild(postImg);
			postWrapper.appendChild(postSubject);
			postWrapper.appendChild(postDate);
			item.appendChild(postWrapper);
			postWrapper.onclick = function(){
				showContents(this);
			}
		closeContents();
		init();
	}
}