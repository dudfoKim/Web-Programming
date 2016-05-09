function calcPrice()
{	
	var price = [5000, 4000, 4000, 4500, 3500];
	var count = [0, 0, 0, 0, 0];
	var itemTotal = 0;
	var deliveryPrice = 0;
	var allTotal = 0;
	var i = 0;
	var check_bookNum = 0;
	
	if(document.getElementById("WP").checked)
	{
		if(Number(document.getElementById("WPCount").value)>5 || Number(document.getElementById("WPCount").value)<1)
		{
			window.alert("Please select 1 ~ 5 item for Web Programming");
			check_bookNum++;
		}
		else
		{
			count[0] = Number(document.getElementById("WPCount").value);
		}
	}
	if(document.getElementById("OS").checked)
	{		
		if(Number(document.getElementById("OSCount").value)>5 || Number(document.getElementById("OSCount").value)<1)
		{
			window.alert("Please select 1 ~ 5 item for Operating System");
			check_bookNum++;
		}
		else
		{
			count[1] = Number(document.getElementById("OSCount").value);
		}
	}
	if(document.getElementById("DC").checked)
	{
		if(Number(document.getElementById("DCCount").value)>5 || Number(document.getElementById("DCCount").value)<1)
		{
			window.alert("Please select 1 ~ 5 item for Data Communication");
			check_bookNum++;
		}
		else
		{
			count[2] = Number(document.getElementById("DCCount").value);
		}
	}
	if(document.getElementById("OOD").checked)
	{
		if(Number(document.getElementById("OODCount").value)>5 || Number(document.getElementById("OODCount").value)<1)
		{
			window.alert("Please select 1 ~ 5 item for Objected Oriented Design");
			check_bookNum++;
		}
		else
		{
			count[3] = Number(document.getElementById("OODCount").value);
		}
	}
	if(document.getElementById("CP").checked)
	{
		if(Number(document.getElementById("CPCount").value)>5 || Number(document.getElementById("CPCount").value)<1)
		{
			window.alert("Please select 1 ~ 5 item for Computer Programming");
			check_bookNum++;
		}
		else
		{
			count[4] = Number(document.getElementById("CPCount").value);
		}
	}
		
	for(i=0; i<5; i++)
	{
		itemTotal += (count[i] * price[i]);
	}
	
	if(itemTotal>=10000)
	{
		deliveryPrice = 0;
	}
	else
	{
		deliveryPrice = 2000;
	}
	
	if(check_bookNum==0)
	{
		allTotal = itemTotal + deliveryPrice;

		document.getElementById("allTotal").innerHTML = allTotal;
		document.getElementById("itemTotal").innerHTML = itemTotal;
		document.getElementById("deliveryPrice").innerHTML = deliveryPrice;
	}
}

function checkAll()
{
	var check_Box = checkBox();
	
	if(check_Box==0)
	{
		window.alert("Please select one or more items!");

		return;
	}
	
	var check_Name = checkName();
	
	if(check_Name==-1)
	{
		window.alert("Please fill your name!");
		
		return;
	}
	else if(check_Name==-2)
	{
		window.alert("Please fill your name by text!");
		
		return;
	}
	
	var check_Address = checkAddress();
	
	if(check_Address==-1)
	{
		window.alert("Please fill your address!");
		
		return;
	}
	
	var check_Select = checkSelect();
	
	if(check_Select==-1)
	{
		window.alert("Please select the your Card Company!");

		return;
	}
	
	var check_CardNumber = checkCardNumber();
	
	if(check_CardNumber==-1)
	{
		window.alert("Please fill your cardNumber");
	
		return;
	}
	else if(check_CardNumber==-2)
	{
		window.alert("Please fill your cardNumber correctly!");
	
		return;
	}
	
	calcPrice();
}

function checkBox()
{	
	var checkCount = 0;

	if(document.getElementById("WP").checked)
	{
		checkCount++;
	}
	if(document.getElementById("OS").checked)
	{
		checkCount++;
	}
	if(document.getElementById("DC").checked)
	{
		checkCount++;
	}
	if(document.getElementById("OOD").checked)
	{
		checkCount++;
	}
	if(document.getElementById("CP").checked)
	{
		checkCount++;
	}
	
	return checkCount;
}

function checkName()
{
	var name = document.getElementById("name").value;
	
	if(name=="")
	{
		return -1;
	}
	else if(!isNaN(name))
	{
		return -2;
	}
}

function checkAddress()
{
	var address = document.getElementById("address").value;
	
	if(address=="")
	{
		return -1;
	}
}

function checkSelect()
{
	var checkCard = document.getElementById("card");
		
	if(checkCard.selectedIndex==0)
	{
		return -1;
	}
}

function checkCardNumber()
{
	var cardNumber = document.getElementById("cardNumber").value;
	var check = /\d{4}-\d{4}-\d{4}-\d{4}/;

	if(cardNumber=="")
	{
		return -1;
	}
	else if(!cardNumber.match(check))
	{
		return -2;
	}
}