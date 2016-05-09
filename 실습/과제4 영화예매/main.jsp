<!DOCTYPE html>

<html>

<script>
function check()
{
	<%String checkLogin= request.getParameter("checkLogin");%>

	var login = "<%=checkLogin%>";

	if(login=="SUCCESS")
	{
		window.alert("환영합니다!");
		location.href = "loginTrue.jsp";
	}
	else if(login=="FAIL")
	{
		window.alert("패스워드가 틀립니다!");
		location.href = "main.jsp";
	}
	else if(login=="NO")
	{
		window.alert("아이디가 없습니다!");
		location.href = "main.jsp";
	}
}
</script>

<head>
	<meta charset="UTF-8">

	<title>
		로그인 페이지
	</title>

</head>

<body onload="check()">

	<form action="./login.jsp" method="POST">
		<p>아이디 : <input type="text" name="id" autocomplete="off" required/></p>
		<p>패스워드 : <input type="password" name="password" autocomplete="off" required/></p>
		<p><input type="submit" value="로그인"></p>
	</form>

	<form action="./register.jsp" method="POST">
		<p><input type="submit" value="회원가입"></p>
	</form>

</body>
</html>