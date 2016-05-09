<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<% 
request.setCharacterEncoding("UTF-8");

String result = null;
String id= request.getParameter("id");
String password= request.getParameter("password");

PrintWriter writer = null;
int zero = 0;
String filePath= application.getRealPath("/homework4/" + id+ ".txt");
File f = new File(filePath);
int defaultPoint = 0;

try
{
	if(f.exists())
	{
		result = "FAIL";
	}
	else
	{
		writer = new PrintWriter(filePath);
		writer.println(password);
		writer.println(defaultPoint);
		writer.println(zero);
		writer.println(zero);
		
		result = "SUCCESS";
	}
}
catch(IOException e)
{
	result = "FAIL";
}
finally
{
	try
	{
		writer.close();
	}
	catch(Exception e)
	{
		
	}
}

response.sendRedirect("register.jsp?checkRegister=" + result);
%>