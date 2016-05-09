function checkall(form){
	if(form.check.checked === true){
		for(var i = 0; i < form.book.length; i++){
			form.book[i].checked = true;
		}
		choose(form);
	}
	
	else{
		for(var i = 0; i < form.book.length; i++){
			form.book[i].checked = false;
		}
		choose(form);
	}
}
function choose(form){
	if(form.book.checked === true)
		bookprice(form);
	else
		bookprice(form);
}

function bookprice(form){
	var price = 0;
	
	for(var i = 0; i < form.book.length; i++){
		if(form.book[i].checked === true)
			price += form.book[i].value * form.quantity[i].value;
	}
	
	document.getElementById("totalprice").innerHTML = price;
	
	if(price === 0){
		document.getElementById("fee").innerHTML = "0";
		document.getElementById("sum").innerHTML = price;
	}
		
	else if( price < 10000){
		document.getElementById("fee").innerHTML = "2000";
		document.getElementById("sum").innerHTML = price + 2000;
	}
	
	else{
		document.getElementById("fee").innerHTML = "0";
		document.getElementById("sum").innerHTML = price + 0;
	}
}

function formcheck(form){
	if(form.book[0].checked === false &&
		form.book[1].checked === false &&
		form.book[2].checked === false &&
		form.book[3].checked === false){
			alert("책을 선택해주세요");
			return false;
		}
		
	else if(form.name.value === "" || /[0-9]/.test(form.name.value)){
			alert("이름은 문자열로 입력해주세요");
			form.name.focus();
			return false;
		}
	else if(form.addr.value === ""){
			alert("주소를 입력해주세요");
			form.addr.focus();
			return false;
	}
	else if(form.card.value === ""){
			alert("카드를 선택해주세요");
			form.card.focus();
			return false;
	}
	else if(!/[\d]{4}[-][\d]{4}[-][\d]{4}[-][\d]{4}/.test(form.cardnumber.value)){
		alert("카드번호를 입력해주세요(ex)0000-0000-0000-0000)")
		form.cardnumber.focus();
		return false;
	}
	alert("Thank you!")
	return true;
}