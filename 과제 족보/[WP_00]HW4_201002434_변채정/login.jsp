<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>login</title>
</head>
<body>
	<%
		String pw = null;
		String money = null;
		%><script>setTimeout("window.location = 'logout.jsp'",120000);</script><%
		request.setCharacterEncoding("UTF-8");
		String accountNum = request.getParameter("accountNum");
		String password = request.getParameter("password");

		String Path = "C:\\Users\\Administrator\\Documents\\New Folder\\";
		String name = accountNum + ".txt";
		File dir = new File(Path);
		String filenames[] = dir.list();

		String file = Path + name;

		FileReader fr = new FileReader(file);
		BufferedReader read = new BufferedReader(fr);
		pw = read.readLine();
		money = read.readLine();
		
	
		
		for (int cnt = 0; cnt < filenames.length; cnt++) {
			if (filenames[cnt].equals(name)) {
				if (pw.equals(password)) {
					}
				else
				{%>
					<script>
						alert("비밀번호 재입력");
						document.location.href="bank.html";
					</script>
					<%}
			}
			else{
				
			}
		}
	%>
	<form action="logout.jsp" method="post">
	<input type="hidden" value="<%=accountNum%>" name="accountNum">
	<input type="hidden" value="<%=money%>" name="money">
		<%= accountNum+"님이 로그인 중입니다..." %><br>
		<%= accountNum+"님의 현재 잔액은"+money+"원 입니다" %>
		<br>입금 금액: <input type="text" name="deposit">
		<input type="submit" value="입금" name="depositbutton" formaction="deposit.jsp">
		<br>출금 금액: <input type="text" name="withdraw">
		<input	type="submit" value="출금" name="withdrawbutton" formaction="withdraw.jsp">
		<br>송금 계좌 번호: <input type="text" name="remitNum">
		송금 금액: <input type="text" name="remit"> 
		<input type="submit" value="송금" name="remitbutton" formaction="remit.jsp"> 
		<br><input type="submit" value="로그아웃" name="logout" formaction="logout.jsp">
	</form>
</body>
</html>