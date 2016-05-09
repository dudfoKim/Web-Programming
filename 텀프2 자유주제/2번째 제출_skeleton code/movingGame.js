var startday = new Date();
var clockStart = startday.getTime(); // Date 객체를 이용해서 현재의 시간을 할당받는 변수

function keyDown() // 해당하는 키보드를 누를 때 값이 바뀐다.(onkeypressdown)
{
	key = event.keyCode;

	if(key==37)
	{
		left = true;
	}
	if(key==38)
	{
		up = true;
	}
	if(key==39)
	{
		right = true;
	}
	if(key==40)
	{
		down = true;
	}
}

function keyUp() // 해당하는 키보드를 땔 때 변수의 값이 바뀐다.(onkeypressup)
 {
	key = event.keyCode;

	if(key==37)
	{
		left = false;
	}
	if(key==38)
	{
		up = false;
	}
	if(key==39)
	{
		right = false;
	}
	if(key==40) 
	{
		down = false;
	}
}

function initGametime() // Date 객체를 이용해서 브라우져의 이용시간을 구하는 함수
{
	var myTime = new Date(); 
	var timeNow = myTime.getTime();  
	var timeDiff = timeNow - clockStart; 

	this.diffSecs = timeDiff/1000;

	return(this.diffSecs); 
}

function getGametime() // initGametime()에서 나온 결과값을 timer 태그에 출력한다.
{ 
	var tempTime = initGametime(); 
	var result = tempTime + " ";

	result = result.substring(0, result.indexOf(".")) + " s"; 
	document.getElementById("timer").value = result;
	setTimeout("getGametime()", 1000);
}