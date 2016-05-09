<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>accountNumber</title>
</head>
<body>
	<%
		request.setCharacterEncoding("UTF-8");
		String accountNum = request.getParameter("accountNum");
		String password = request.getParameter("password");
		int money=0;
		
		PrintWriter writer = null;
		String filePath = "C:\\Users\\Administrator\\Documents\\New Folder\\" + accountNum + ".txt";
		String Path = "C:\\Users\\Administrator\\Documents\\New Folder\\";
		String name = accountNum+".txt";
		Boolean value=true;
		File dir = new File(Path);
		String filenames[] = dir.list();
		if(accountNum.equals("")||password.equals("")){
			%>
			<script>
				alert("NULL");
				document.location.href="bank.html";
			</script>
			<%
		}
		for(int cnt=0; cnt<filenames.length; cnt++){
				if(filenames[cnt].equals(name)){
					%>
					value=false;
					<script>alert("존재하는 계좌번호");
					document.location.href="bank.html";
					</script><%
				}
		}
				
		if(value){
		try {
			writer = new PrintWriter(filePath);
			writer.println(password);
			writer.println(money);
		} catch (IOException ioe) {
			out.println("파일에 데이터를 쓸 수 없습니다.");
		} finally {
			try{writer.close();}
			catch(Exception e){}
		}
		}
	%>
	<script>
	document.location.href="bank.html";
					</script>
</body>
</html>