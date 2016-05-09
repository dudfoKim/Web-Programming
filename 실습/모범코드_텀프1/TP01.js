var count = 0;

var insertIndex = -1;//어디에 넣을지에 대한 index

////Drop Down Gallery Menu ////
function showMenu(){
	document.getElementById("hiddenMenu").style.display="block";
}
function hideMenu(){
	document.getElementById("hiddenMenu").style.display="none";
}


function resetValue(){
	document.getElementById("hiddenTitle").value ="";

	document.getElementById("hiddenTextArea").value ="";
	document.getElementById("inputImage").value ="";
}

//글쓰기 버튼 클릭시 함수 수행
function openContents(){

	resetValue();
	document.getElementById("hiddenTitle").focus();
	document.getElementById("submitButton").style.display = "inline";
	document.getElementById("inputImage").style.display = "block";
	document.getElementById("hiddenContent").style.display = "block";

}

function closeContents(){
	document.getElementById("hiddenContent").style.display = "none";
}


//등록 버튼 클릭시 수행
function submit(){
	/////////달력////////////	javascript Date() 함수를 이용함.
	current = new Date();
	year = current.getFullYear();
	month = current.getMonth()+1;
	date = current.getDate();
	hour = current.getHours();
	minute = current.getMinutes();

	//null값이 들어 올 경우 예외처리
	if(document.getElementById("hiddenTitle").value === "" ){
		alert("제목을 입력하세요.");
	}
	else if(document.getElementById('inputImage').files[0] === undefined){
		alert("이미지를 추가하세요.");
	}
	else if(document.getElementById("hiddenTextArea").value === ""){
		alert("내용을 입력하세요.");
	} else {
		//div 생성 
		insertDiv(insertIndex);
		closeContents();
		resetValue();
	}
	insertIndex = -1;	
}

//content 속 DIV 설정 
function insertDiv(){
	var frame = document.getElementById("content");
	var year = current.getFullYear();
	var month = current.getMonth()+1;
	var date = current.getDate();
	var hour = current.getHours();
	var minute = current.getMinutes();
	
	/*                   DIV 생성 부분                   */
	//contents Div
	var contentsDiv = document.createElement("div");
	contentsDiv.setAttribute("class", "contents");
	
	//책갈피를 위한 a 링크 생성
	var bookmark = document.createElement("a");
	bookmark.setAttribute("name", "bookmark"+count);
	contentsDiv.appendChild(bookmark);

	
	//제목 입력받아서 동적으로 노드 생성하는 부분(P 태그에 대입)
	var contentsButton = document.createElement("input");
	contentsButton.setAttribute("type", "button");
	contentsButton.setAttribute("class", "contentsButton");
	contentsButton.setAttribute("onclick", "deleteContents(this)");
	contentsButton.setAttribute("value", "게시글 삭제");
	
	var titleP = document.createElement("p");
	var title = document.createTextNode(document.getElementById("hiddenTitle").value);
	titleP.appendChild(title);
	
	var dateP = document.createElement("p");
	dateP.innerHTML = year+"/" +month+"/"+date+"/"+"&nbsp;&nbsp;&nbsp;&nbsp;" +hour+"시" +minute + "분";
	
	var hr1 = document.createElement("hr");
	hr1.setAttribute("width", "100px");
	


	var file = [ ];
	var img = [ ];
	var i = 0;
	while(document.getElementById('inputImage').files[i] !== undefined){
		img[i] = document.createElement("img");
		img[i].setAttribute("class", "contentsImage");
		file[i] = document.getElementById('inputImage').files[i];
		img[i].setAttribute("src", window.URL.createObjectURL(file[i]));
		console.log(file[i]);
		
		i++;
	}
			
	var textP = document.createElement("p");
	var textArea = document.createTextNode(document.getElementById("hiddenTextArea").value);
	textP.appendChild(textArea);
	
	var hr2 = document.createElement("hr");
	
	/*                             덧글 전까지 생성   */
	
	//덧글부분
	var commentDiv = document.createElement("div");
	commentDiv.setAttribute("class", "comments");
	
	var commentList = document.createElement("div");
	commentList.setAttribute("class", "commentList");
	
	var table = document.createElement("table");
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var inputName = document.createElement("input");
	inputName.setAttribute("type", "text");
	inputName.setAttribute("class", "user");
	inputName.setAttribute("maxlength", "10");
	td1.appendChild(inputName);
	
	var td2 = document.createElement("td");
	var textareaComment = document.createElement("textarea");
	textareaComment.setAttribute("class", "hiddenComment");
	textareaComment.setAttribute("rows", "1");
	textareaComment.setAttribute("cols", "30");
	td2.appendChild(textareaComment);
	
	var td3 = document.createElement("td");
	var submitButton = document.createElement("button");
	var 확인 = document.createTextNode("확인");
	submitButton.setAttribute("class", "commentButton");
	submitButton.setAttribute("onclick", "setComments(this)");
	submitButton.appendChild(확인);
	td3.appendChild(submitButton);
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	
	table.appendChild(tr);
	//덧글 끝
	
	
	//append부분
	contentsDiv.appendChild(contentsButton);
	contentsDiv.appendChild(titleP);
	contentsDiv.appendChild(dateP);
	contentsDiv.appendChild(hr1);
	
	
	//contentsDiv.appendChild(img);	//이미지 노드 추가하는 부분
	for(var i = 0; i<img.length; i++){
		contentsDiv.appendChild(img[i]);
	}
	contentsDiv.appendChild(textP);
	contentsDiv.appendChild(hr2);
	
	commentDiv.appendChild(commentList);
	commentDiv.appendChild(table);
	contentsDiv.appendChild(commentDiv);
	console.log(insertIndex);
	
	//원본
	numberIndex = Number(insertIndex);
	
	var sidebar = document.getElementById("sideBarUl");
	var node = document.createElement("LI");
	var link = document.createElement("a");
	
	//북마크 위한 Attribute 설정
	link.setAttribute("href", "#bookmark"+count);
	link.setAttribute("class", "link");
	
	var sideBarTitle = document.createTextNode(document.getElementById("hiddenTitle").value);
	link.appendChild(sideBarTitle);
	node.appendChild(link);
	
    if( insertIndex == -1 ){
		frame.appendChild(contentsDiv);
		sidebar.appendChild(node);		//추가 
	} else{
		// ContentsDiv 를 childNode 앞으로
		frame.insertBefore(contentsDiv, document.getElementById("content").childNodes[numberIndex]);
		sidebar.insertBefore(node,sidebar.childNodes[numberIndex]);
	} 
	
	count++;
}


//댓글 설정, count 값을 받아 온다.
function setComments(obj){
	
	var classButton = document.getElementsByClassName(obj.className);
	var index = -1;
	for( var i = 0; i < classButton.length; i++ ) {
		if( obj === classButton[i]) index = i;
	}  
	
	
	var current = new Date();
	var year = current.getFullYear();
	var month = current.getMonth()+1;
	var date = current.getDate();
	var hour = current.getHours();
	var minute = current.getMinutes();
	var id = document.getElementsByClassName("user")[index].value;
	var content = document.getElementsByClassName("hiddenComment")[index].value;
	if(id === "" ){
		alert("아이디를 입력하세요.");
		return;
	}
	else if(content === "" ){
		alert("내용을 입력하세요.");
		return;
	}
	
	
	
	
	var comment = document.getElementsByClassName("commentList")[index];
	var commntDiv = document.createElement("div");
	var ptag = document.createElement("p");
	var btag = document.createElement("b");
	var userId = document.createTextNode(id);
	var dateSpan = document.createElement("span");
	dateSpan.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + year+ "/"+ month + "/"+ date + "/  " + hour + " : " + minute;
	var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("value", "삭제");
	button.setAttribute("onclick", "deleteComments(this)");
	var contentP = document.createElement("p");
	var contentText = document.createTextNode(content);
	contentP.appendChild(contentText);
	
	btag.appendChild(userId);
	ptag.appendChild(btag);
	commntDiv.appendChild(ptag);
	ptag.appendChild(dateSpan);
	comment.appendChild(commntDiv);
	commntDiv.appendChild(contentP);
	commntDiv.appendChild(button);
	
	
	document.getElementsByClassName("user")[index].value = "";
	document.getElementsByClassName("hiddenComment")[index].value = "";
}

function deleteComments(obj){
	var bool = window.confirm("삭제하시겠습니까?");
	if(bool) obj.parentElement.remove();
}


//삭제부분 delete(this);
function deleteContents(obj){
	var contentsButton = document.getElementsByClassName("contentsButton");
	var index = 0;
	for( var i = 0; i < contentsButton.length; i++ ) 
		if( obj === contentsButton[i]){
			index = i;		//다 돌려서 this(obj)의 index를 찾는 다음 나옴. 
			break;
		}
	if(confirm("삭제하시겠습니까?")){
		//그 자체 노드 삭제 시킬 때
		document.getElementById("sideBarUl").childNodes[index+1].remove();// +1은 기본 ul에서 text가 존재하기 때문이다.
		//부모노드 삭제
		obj.parentElement.remove();//이건 버튼위치에 따라 다르게 함.
	}
	closeContents();		
}


function insertNode(){
	insertIndex = prompt("몇번째에 추가하시겠습니까?");
	var length = document.getElementsByClassName("contents").length;
	if( insertIndex > length ) {
		if( length == 0 ) {
			alert("현재 아이템이 한개도 없습니다.");
		}else 
			alert("현재 아이템의 갯수보다 많습니다.");
		insertIndex = -1;
	}else{
		if(insertIndex<=0){
			alert("1 이상의 값을 입력하세요.");
		}else{
			openContents();
		}
		
	} 
}