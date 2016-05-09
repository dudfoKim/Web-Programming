function checkSubmit()
{
	var ID = document.input.ID.value;
	var age = document.input.age.value;
	var check1 = document.getElementsByName("checked1");
	var check2 = document.getElementsByName("checked2");
	var male = document.getElementsByName("sex");
	var checkBoxString="I like ";
	
	try
	{
		if(ID.search(/\W|\s/g) > -1 || ID===null) throw "invalid ID";
	
		if(ID.length<3) throw "ID too short";
		
		if(isNaN(age)) throw "age is not number";
		
		if(!(check1[0].checked) && !(check2[0].checked)) checkBoxString = "Why don't you like HTML?";
		
		else if((check1[0].checked) && (check2[0].checked)) checkBoxString+="HTML & CSS";
		
		else if(check1[0].checked) checkBoxString+="HTML";
		
		else if(check2[0].checked) checkBoxString+="CSS";
		
		console.log(document.getElementsByName("msg")[0].value);
		
		if(!male[0].checked && !male[1].checked) throw "Check the radio box";
		
		var string = "ID : "+ID+"\n"+"age : "+age+"\n"+"E-mail : "+document.input.email.value+"\n"+"male : "+((male[0].checked)?"male":"female")+"\n"+
					 "Message : "+document.getElementsByName("msg")[0].value+"\n"+checkBoxString;
		
		alert(string);
		
	}
	catch(err)
	{
		alert(err);
	}
};

function pictureClick(index)
{
	switch(index)
	{
		case 1:
			alert("He is Tom");
			break;
		case 2:
			alert("He is Dean");
			break;
		case 3:
			alert("He is Joueny");
			break;
		case 4:
			alert("He is Smith");
			break;
		case 5:
			alert("He is Steve");
			break;
		case 6:
			alert("He is Bob");
			break;
		case 7:
			alert("He is Tomas");
			break;
		case 8:
			alert("He is Forest");
			break;
		case 9:
			alert("He is Kim");
			break;
	}

};