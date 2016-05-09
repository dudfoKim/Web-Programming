<%@page import="java.io.FileNotFoundException"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
 <%@ page import="java.io.*" %>
 <% request.setCharacterEncoding("euc-kr");%>
 
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
<%
	String userName = request.getParameter("userName");
	String userSex = request.getParameter("userSex");
	String userAge = request.getParameter("userAge");
	String userPhone = request.getParameter("userPhone");
		
	BufferedReader reader = null;
	
	//아이디 존재
	try{
		String filePath = application.getRealPath("/WEB-INF/"+userName+".txt");
		
		reader = new BufferedReader(new FileReader(filePath));
		
		//입력 후
		reader.close();
		%>
		<script>
		alert("존재하는 이름");
		location.replace("index.jsp") ;
		</script>
		<% 
	//파일이 없음 -> 생성
	}catch (FileNotFoundException ex){
		PrintWriter writer = null;
		try{
// 			String directory = application.getRealPath("/WEB-INF");
			String directory = "D:\\lab\\pra";
			String filePath = directory + "/" + userName +".txt" ;
			
			File dir = new File(directory);
			
			if(!dir.exists()) dir.mkdir();
			
			writer = new PrintWriter(filePath);				
			writer.printf(userName+"%n");
			writer.printf(userSex+"%n");		
			writer.printf(userAge+"%n");		
			writer.printf(userPhone+"%n");		
			%>
			<script> alert("전송 성공"); location.replace("index.jsp");</script>
			<%
		}catch(IOException e){
			out.println("err");
			
		}finally{
			try{
				writer.close();
			}catch(Exception e){
			}
		}
	}
	%>

</body>
</html>