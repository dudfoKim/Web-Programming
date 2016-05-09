<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
		request.setCharacterEncoding("UTF-8");
		String accountNum = request.getParameter("accountNum");
		String money = request.getParameter("money");
		String deposit = request.getParameter("deposit");
		String pw = null;
		
		int moneyInt = Integer.parseInt(money);
		int depositInt =Integer.parseInt(deposit);
		int result = moneyInt+depositInt;
		
		String filePath = "C:\\Users\\Administrator\\Documents\\New Folder\\" + accountNum + ".txt";
		String Path = "C:\\Users\\Administrator\\Documents\\New Folder\\";
		
		File dir = new File(Path);
		String filenames[] = dir.list();

		FileReader fr = new FileReader(filePath);
		BufferedReader read = new BufferedReader(fr);
		pw = read.readLine();
	
		PrintWriter writer = null;
		
				writer = new PrintWriter(filePath);
				writer.println(pw);
				writer.println(result);
				writer.close();		
		
				response.sendRedirect("login.jsp?password="+pw+"&accountNum="+accountNum);		
%>
</body>
</html>