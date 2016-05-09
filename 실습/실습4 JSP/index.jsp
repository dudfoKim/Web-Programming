<html>

<script>
function check()
{
	<%String temp = request.getParameter("check");%>
	var check = "<%=temp%>";
	
	if(check=="SUCCESS")
	{
		window.alert("전송을 성공했습니다!");
		location.href = "index.jsp";
	}
	else if(check=="FAIL")
	{
		window.alert("전송을 실패했습니다!");
		location.href = "index.jsp";
	}
}
</script>

<head>
	<meta charset="UTF-8">

	<title>
		index.jsp
	</title>
</head>

<body onload="check()">

	<form action="./makeUser.jsp" method="POST">
		<p>이름 : <input type="text" name="name"/></p>
		<p>성별 : <input type="radio" name="sex" value="M" checked>남성<input type="radio" name="sex" value="F">여성</p>
		<p>나이 : <input type="text" name="age"/></p>
		<p>번호 : <input type="text" name="phone"/></p>
		<p><input type="submit" value="전송"/></p>
	</form>

	<form action="userInfo.jsp" method="POST">
		<br><br>
		이름 입력 : <input type="text" name="filename"/>
		<input type="submit" value="정보 확인">
	</form>

</body>
</html>