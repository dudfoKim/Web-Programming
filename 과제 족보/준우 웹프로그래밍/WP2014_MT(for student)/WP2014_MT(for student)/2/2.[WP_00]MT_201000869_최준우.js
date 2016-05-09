function Member(name, birth, height, time, weight)
{
	this.name=name;
	this.birth=birth;
	this.height=height;
	this.time=time;
	this.weight=weight;
}

Member.prototype.calculate = function()
{
	console.log(this.name);
	console.log(this.birth);
	console.log(this.height);
	console.log(this.weight);
	
	
	
	var standard = (this.height-100)*0.9;
	var obesity = (this.weight/standard)*100;
	
	console.log(standard);
	console.log(obesity);
	
	return obesity;
}


function enter_name(e, text)
{
	if(e.keyCode===13)
		check_name(text);
		
	return false;
}

function enter_birth(e, num)
{
	if(e.keyCode===13)
		check_birth(num);
		
	return false;
}

function enter_height(e, num)
{
	if(e.keyCode===13)
		check_height(num);
		
	return false;
}

function enter_weight(e, num)
{
	if(e.keyCode===13)
		check_weight(num);
		
	return false;
}




function check_name(text)
{
	try{
			if(text===null || text.search(/\W|\s/g) > -1 || text===""|| !isNaN(text)  ||typeof(text)!=="string") throw "invalid ID";
			return true;
		}
		catch(err)
		{
			alert("이름에는 문자열을 입력하시오.");
			return false;
		}
	
}

function check_birth(num)
{

		if(2014-num<18)
		{
			alert("18세 이상만 입력이 가능합니다.");
			return false;
		}
		return true;

}

function check_height(num)
{

		try{
			if(isNaN(num)) throw "invalid number";
			
			return true;
		}
		catch(err)
		{
			alert("키에는 숫자를 입력하시오.");
			return false;
		}

}

function check_weight(num)
{
		try{
			if(isNaN(num)) throw "invalid number";
			
			return true;
		}
		catch(err)
		{
			alert("몸무게에에는 숫자를 입력하시오.");
			return false;
		}
}

function check_time()
{
	var count=0;
	var name=document.getElementById("name").value;
	var birth=document.getElementById("birth").value;
	var height=parseInt(document.getElementById("height").value);
	var weight=parseInt(document.getElementById("weight").value);
	var morning=document.getElementById("morning").checked;
	var noon=document.getElementById("noon").checked;
	var evening=document.getElementById("evening").checked;
	
	
	if(morning)
		count++;
	if(noon)
		count++;
	if(evening)
		count++;
		
	if(count !== 2)
	{
		alert("2개만 선택하시오");
	}
	else
	{
		if(check_name(name)&&check_birth(birth)&&check_height(height)&&check_weight(weight))
		{
			var time = [morning, noon, evening];
			
			var person = new Member(name, birth, height, time, weight);
			
			document.getElementById("obesity").value = person.calculate();
			
		}
		
		
	}
}

