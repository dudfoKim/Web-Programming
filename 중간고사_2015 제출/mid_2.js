var score = [4, 3, 2, 1];

function checkSid()
{
	var sid = document.getElementById("checkId").value;
	var check = /^20.{0}[0-9]{7}/;

	if(!sid.match(check))
	{
		window.alert("제대로 된 학번을 입력하세요!");
		return -1;
	}
}

function checkValue()
{
	var webScore = document.getElementById("webScore");
	var webPresent = Number(document.getElementById("webPresent").value);
	var webTime = Number(document.getElementById("webTime").value);
	
	var osScore = document.getElementById("osScore");
	var osPresent = Number(document.getElementById("osPresent").value);
	var osTime = Number(document.getElementById("osTime").value);
	
	if(webPresent=="" || webTime=="" || osPresent=="" || osTime=="")
	{
		window.alert("출석이나 학점 값을 입력하세요");
	}
	
	if(webScore.selectedIndex!=0 || webScore.selectedIndex!=5 || osScore.selectedIndex!=0 || osScore.selectedIndex!=5)
	{
		var webscoreResult = score[webScore.selectedIndex-1];
		var webMinimum = Math.round(((webTime * 15) * 0.75));
		var osscoreResult = score[osScore.selectedIndex-1];
		var osMinimum = Math.round(((osTime * 15) * 0.75));
		
		if(webMinimum>webPresent || osMinimum>osPresent)
		{
			window.alert("최소 출석 미만은 F입니다. 다시 수정해 주세요");
		}
	}
}

function computer_score()
{
	var check = checkSid();

	if(check==-1)
	{
		window.alert("제대로 된 학번을 입력하세요!");
	}
	else
	{
		window.alert("학번 입력 성공");
	}
}