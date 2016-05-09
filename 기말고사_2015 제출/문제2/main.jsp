<!DOCTYPE html>
<html>

<script>
function check()
{
	<%String temp = request.getParameter("check");%>
	var check = "<%=temp%>";
	
	if(check=="SUCCESS")
	{
		window.alert("Duplicate the title of text file!");
		location.href = "main.jsp";
	}
	else if(check=="FAIL")
	{
		window.alert("Saved weather information in server!");
		location.href = "main.jsp";
	}
}
</script>

<head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css">
	<script type="text/javascript" ></script>
	
	<title>2015 Web Programming Final Exam Q#2</title>	
</head>

<body onload="check()">

		<form action="weather.jsp" method="POST">
		Please provide data to save information of region's weather : 
		<br>
		Region's name : <input type="text" name="region"><br>
		Temperature  : <input type="text" name="temperature"><br>
		Microdust  : <input type="text" name="dust"><br>
		Rainfall probability : <input type="text" name="rain"><br>
		<input type="submit" value="submit"/>	
		</form>

<br><br>

	<form action="search.jsp" method="POST">
	Please provide the information to retrieve <br>
	Region's name :  <input type="text"><br>
	<input type="checkbox"> Temperature 
	<input type="checkbox">  Microdust 
	<input type="checkbox">  Rainfall probability <br>	
	<input type="button" value="Search"> </button>	
	</form>
<hr>

 </body>
<html>