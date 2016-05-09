function getCurrentTime() // setinterval 메소드를 사용해서 현재 시간을 계속 업데이트 해준다.
{
    var newDate = new Date;
	var nowTime = document.getElementById("currentTime");
	nowTime.style.display = "inline";
    nowTime.innerHTML = (newDate.getHours() + " : " + newDate.getMinutes() + " : " + newDate.getSeconds());

	setInterval(getCurrentTime, 1000);
}