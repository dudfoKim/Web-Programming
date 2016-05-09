function getCount() // 메인 페이지를 불러올 때 자동으로 guestCount id를 가진 태그에 로컬 저장소의 값을 나타내게 한다.
{		
	if(localStorage.clickcount==0 || localStorage.clickcount===undefined ||localStorage.clickcount===null)
	{
		document.getElementById("guestCount").innerHTML = 0;
	}
	else
	{
		document.getElementById("guestCount").innerHTML = localStorage.clickcount;
	}

	getCurrentTime();
	getLocation();
}

function getCurrentTime() // setinterval 메소드를 사용해서 현재 시간을 계속 업데이트 해준다.
{
    var newDate = new Date;
	var nowTime = document.getElementById("currentTime");
	nowTime.style.display = "inline";
    nowTime.innerHTML = (newDate.getHours() + " : " + newDate.getMinutes() + " : " + newDate.getSeconds());

	setInterval(getCurrentTime, 1000);
}

function guestCount() // 게임 페이지로 이동하는 링크를 누르면 로컬 저장소의 값이 1 증가한다.
{
	if(typeof(Storage)!=="undefined")
	{
		if(localStorage.clickcount)
		{
            localStorage.clickcount = Number(localStorage.clickcount)+1;
		}
		else
		{
            localStorage.clickcount = 1;
		}
		
		document.getElementById("guestCount").innerHTML = localStorage.clickcount;
	}
	else
	{
		window.alert("로컬 저장소를 지원하지 않습니다!");

		return;
	}
}

function getLocation() // HTML API 중 Geolocation을 이용해서 현재 위치 정보를 받아온다.
 {
    if(navigator.geolocation)
	{
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } 
	else 
	{
        window.alert("Geolocation을 지원하지 않습니다!");
    }
}

function showPosition(position) // getLocation에서 받아온 값을 파라미터로 넘겨서 페이지에 출력한다.
 {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=13&size=275x215&sensor=false";

    document.getElementById("here").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) // Geolocation 사용 중 에러를 처리한다.
{
    switch(error.code) 
	{
        case error.PERMISSION_DENIED:
		{
			window.alert("사용자가 Geolocation을 허용하지 않았습니다!");
            break;
		}
        case error.POSITION_UNAVAILABLE:
		{
			window.alert("사용할 수 없는 위치정보입니다!");
            break;
		}
        case error.TIMEOUT:
		{
			window.alert("요청시간이 만료되었습니다 !");
            break;
		}
        case error.UNKNOWN_ERROR:
		{
			window.alert("소스코드 구현이 잘못되었습니다!");
            break;
		}
    }
}