function myFunction()
{
var y=document.getElementById("mess");
var one=document.getElementsByName("one").checked;
y.innerHTML="";
try//Throw and Try to Catch
{ 
var x=document.getElementById("demo").value;

if(x=="")    throw "empty";
if(isNaN(x)) throw "not a number"; //Check if value is null or not valid value
if(x>10)     throw "too high";
if(x<5)      throw "too low";

}
catch(err)
{
	switch(err){//Switch statement
		case "empty":
			alert("empty"+err);
			break;
		case"not a number":
			alert("empty"+err);
			break;
		case"too high":
alert("empty"+err);		
break;
		case "too low":
alert("empty"+err);
		break;
	}
}
}

function sub(){//Check if user chose ‘check box’
var one=document.getElementById("one").checked;
var two=document.getElementById("two").checked;
var three=document.getElementById("three").checked;

   if(one == true){
   alert("one");
 }
 else if(two == true)
{
   alert("two");
}
else if(three == true){

   alert("three");
}
}