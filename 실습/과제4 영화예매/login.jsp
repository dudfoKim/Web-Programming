<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<%
request.setCharacterEncoding("UTF-8");

String id = request.getParameter("id");
String password = request.getParameter("password");
String result = null;

BufferedReader reader = null;

try
{
  	String filePath = application.getRealPath("/homework4/" + id + ".txt");
	File f = new File(filePath);

   	if(f.exists()==true)
	{
  		reader = new BufferedReader(new FileReader(filePath));

		if(reader.readLine().equals(password))
		{
			session.setAttribute("id", id);
			session.setAttribute("password", password);
			result = "SUCCESS";
		}
		else
		{
			result = "FAIL";
		}
	}
	else
	{
		result = "NO";
	}
}
catch(FileNotFoundException e)
{
	out.println("<br/>파일이 존재하지 않습니다.<br/>");
}
catch(IOException e)
{
   	out.println("<br/>파일을 읽을수 없습니다.<br/>");
}
finally
{
	try
	{
		reader.close();
  	}
	catch(Exception e)
	{
    
   	}
}

response.sendRedirect("main.jsp?checkLogin=" + result);
%>