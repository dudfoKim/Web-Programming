<html>

<script>
function check()
{
	<%String checkRegister = request.getParameter("checkRegister");%>

	var register = "<%=checkRegister%>";

	if(register =="SUCCESS")
	{
		window.alert("회원가입이 완료되었습니다!");
		location.href="main.jsp";		
	}
	else if(register =="FAIL")
	{
		window.alert("회원가입에 실패했습니다!");
		location.href="main.jsp";
	}
}
</script>

<head>
	<meta charset="UTF-8">

	<title>
		회원가입 페이지
	</title>
</head>

<body onload="check()">

	<form action="./registerID.jsp" method="POST">
		<p>아이디 : <input type="text" name="id"/></p>
		<p>패스워드 : <input type="password" name="password"/></p>
		<p><input type="submit" value="register"></p>
	</form>

</body>

</html>