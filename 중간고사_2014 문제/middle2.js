function Member(name, birth, height, weight, time)
{
	this.name = name;
	this.birth = birth;
	this.height = height;
	this.weight = weight;
	this.time = time;
}

function checkAll()
{
	var check_Name = checkName();
	
	if(check_Name==-1)
	{
		window.alert("이름에는 문자열을 입력하세요!");

		return;
	}
	
	var check_Birth = checkBirth();
	
	if(check_Birth==-1)
	{
		window.alert("나이가 너무 어립니다!");
		
		return;
	}
	else if(check_Birth==-2)
	{
		window.alert("나이에 숫자를 입력하세요!");

		return;
	}
		
	var check_Height = checkHeight();
	
	if(check_Height==-1)
	{
		window.alert("키를 입력하세요!");
		
		return;
	}

	var check_Weight = checkWeight();
	
	if(check_Weight==-1)
	{
		window.alert("몸무게에는 숫자를 입력하세요!");

		return;
	}
	
	var check_Time = checkTime();
	
	if(check_Time==-1)
	{
		window.alert("선택을 2개 하세요!");
		
		return;
	}	
	else if(check_Time==-2)
	{
		window.alert("2개를 선택하세요! (1개나 3개 x) ");
		
		return;
	}
	
	calculate(check_Height, check_Weight);
	
	var newMember = new Member(check_Name, check_Birth, check_Height, check_Weight, check_Time);
	
	console.log("이름 : " + check_Name);
	console.log("생일년도 : " + check_Birth);
	console.log("키 : " + check_Height);
	console.log("체중 : " + check_Weight);
	console.log("체크한 시간대 : " + check_Time);
	
	window.alert("회원 등록 성공!");
}

function calculate(height, weight)
{
	var standardWeight = (height - 100) * 0.9;
	var resultObesity = (weight / standardWeight) * 100;
	
	console.log("표준체종 : " + standardWeight);
	console.log("비만도 : " + resultObesity);
}

function checkName()
{
	var name = document.getElementById("name").value;

	if(name=="" || name==null || !isNaN(name))
	{
		return -1;
	}
	
	return name;
}

function checkBirth()
{
	var birth = Number(document.getElementById("birth").value);
		
	if(2015-birth<24)
	{
		return -2;
	}
	else if(birth=="" || birth==null)
	{
		return -1;
	}
	
	return birth;
}

function checkHeight()
{
	var height = document.getElementById("height").value;

	if(height=="" || height==null || isNaN(height) || name<0)
	{
		return -1;
	}
	
	return Number(height);
}

function checkWeight()
{
	var weight = document.getElementById("weight").value;

	if(weight=="" || weight==null || isNaN(weight) || name<0)
	{
		return -1;
	}
	
	return Number(weight);
}

function checkTime()
{
	var count = 0;
	
	for(x in document.getElementsByName("check"))
	{
		if(document.getElementsByName("check")[x].checked)
		{
			count++;
		}
	}
	
	if(count==0)
	{
		return -1;
	}
	else if(count==1 || count==3)
	{
		return -2;
	}
	
	return count;
}