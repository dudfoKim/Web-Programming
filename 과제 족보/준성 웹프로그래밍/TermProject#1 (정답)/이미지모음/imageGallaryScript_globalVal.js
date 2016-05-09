var count =0;			//게시물의 index를 위한 count
var deleteIndex = 0;	//delete를 할 경우 각각의 게시물을 구별 하기 위한 Index

////Drop Down Gallery Menu ////
function showMenu(){
	document.getElementById("hiddenMenu").style.display="block";
}
function hideMenu(){
	document.getElementById("hiddenMenu").style.display="none";
}

/////////////// 가운데 정렬
function centerAlign(){
	var temp = document.getElementById("collectionOfPost").style.marginLeft;
	if(temp === "" || temp === "50px" ){
			document.getElementById("collectionOfPost").style.margin="50px auto";
	}else{
		document.getElementById("collectionOfPost").style.margin="50px 0px 0px 50px";
	}	
}
//////////////////////////////////////////

///////////////일렬로 보기////////////////
function inRow(){
	var elements = document.getElementsByClassName("contents");
	if(elements[0].style.display === "inline-block" || elements[0].style.display === ""){
		for(var i=0; i<elements.length; i++){
			elements[i].style.display = "block";
		}
	}else{
		for(var i=0; i<elements.length; i++){
			elements[i].style.display = "inline-block";
		}
	}
}
//////////////////////////////////////////


////////////Writing Form 초기화///////////////
function init(){				
	document.getElementById("wrapperSubject").value ="";
	document.getElementById("image").src ="";	
	document.getElementById("inputImage").value ="";
}
/////////////////////////////////////////////

/////////////////이미지 보기를 위한 function ///////////////
function showContents(index){
	init();
	deleteIndex = index;				
	document.getElementById("deleteButton").style.display = "inline";
	document.getElementById("submitButton").style.display = "none";
	document.getElementById("inputImage").style.display = "none";
	var id = "contentsImage"+index;
	var subject = "subject"+index;
	var date = "date"+index;
	var src = document.getElementById(id).src;
	document.getElementById("wrapperSubject").value = document.getElementById(subject).innerHTML;
	document.getElementById("image").src = src;
	document.getElementById("newContent").style.display = "block";
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
function deleteContents(){
	var id = "item"+deleteIndex;		
	var layout = document.getElementById("collectionOfPost");
	var item = document.getElementById(id);
	layout.removeChild(item);
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
	//////////////////////	
	
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
		insertTable();	//영역만 잡아주는 부분.
		var id = "contentsImage"+count;
		var subject = "subject"+count;
		var date = "date"+count;
		var file = document.getElementById('inputImage').files[0];
		var image = document.getElementById(id);
		image.src = window.URL.createObjectURL(file);
		document.getElementById(subject).innerHTML = document.getElementById("wrapperSubject").value;	
		document.getElementById(date).innerHTML = theYear+"년" +theMonth+"월"+theDate+"일";	
		count++;
		closeContents();
		init();
	}	
}
//////////////////////////////////////////////////////////////////////////////////////

///////////////////// Cell 추가를 위한 부분 ///////////////////
function insertTable(){
	var item = document.getElementById("collectionOfPost");
	item.innerHTML += "<div id='item"+count+"' class='contents' onclick='showContents("+count+")'><img class='contentsImage' id='contentsImage"+count+"'><p id='subject"+count+"'></p><p id='date"+count+"'></p></div>"
}
///////////////////////////////////////////////////////////////