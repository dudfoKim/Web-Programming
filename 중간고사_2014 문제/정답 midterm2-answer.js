function Member(mname, mbirth, mheight, mweight, mtimes) {
	this.name = mname;
	this.birth = mbirth;
	this.height = mheight;
	this.weight = mweight;
	this.abletime=mtimes;
}

Member.prototype.calculate = function() {
	var stand = (this.height - 100) * 0.9;
	var result = (this.weight/stand) * 100;

	return result.toFixed(1);
} 

function check_name() {
	var cname = document.getElementById("name").value;

	if (!isNaN(cname))  alert("이름에는 문자열을 입력하시오.");	 
}

function check_height() {
	var cheight = document.getElementById("height").value;

	if (isNaN(cheight))  alert("키에는 숫자를 입력하시오.");
}

function check_weight() {
	var cweight = document.getElementById("weight").value;

	if (isNaN(cweight)) alert("몸무게에는 숫자를 입력하시오.");	
}

function check_birth() { 
	var cbirth = document.getElementById("birth").value;

	var year=new Date().getFullYear(); 
	var result=year-parseInt(cbirth.value);

	if (result <18)
		alert ("18세 이상만 입력이 가능합니다.");
}
	
function check_time() {
	var count = 0;
	/*
	var timeAm= document.getElementById("am1");
	var timePm =  document.getElementById("pm1");
	var timeNight = document.getElementById("night");

	if( ctimeAm.checked==true)  {count++};
		
	if( ctimePm.checked==true)  {count++};
	
	if( ctimeNight.checked==true)  {count++};
	*/	
	var abletimes = document.forms[0].abletimes;

	for (var i = 0; i < abletimes.length; i ++) {
		if (abletimes[i].checked == true) {
			count++;
		}
	}

	if (count == 2) 	{
		var cname = document.getElementById("name").value;
		var cbirth = document.getElementById("birth").value;
		var cheight = document.getElementById("height").value;
		var cweight = document.getElementById("weight").value;

		//alert(cname+" "+cbirth+" "+cheight+" "+cweight+""+count);

		createMember(cname,cbirth, cheight,cweight,abletimes);
	}
	else
		alert("2개만 선택하시오.");
}

function createMember(cname, cbirth, cheight, cweight, cabletimes) {
	/*
	var name = document.getElementById("name").value;
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	var abletimes = document.forms[0].abletimes;
	*/

	//alert(cname+" "+cbirth+" "+cheight+" "+cweight+"");

	var answer1 = document.getElementById("answer1");

	var person = new Member(cname, cbirth, cheight, cweight, cabletimes);

	/*check_name(person.name);
	check_height(person.height)
	check_weight(person.weight);
	check_age(person.birth);
	check_time(person.abletime);
	*/
	answer1.innerHTML=person.calculate();
}