<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<% 
request.setCharacterEncoding("UTF-8");

String result = null;
String name = request.getParameter("name");
String sex = request.getParameter("sex");
String age = request.getParameter("age");
String phone = request.getParameter("phone");

PrintWriter writer = null;

String filePath= application.getRealPath("/prac4/" + name + ".txt");
File f = new File(filePath);

try
{
	if(f.exists())
	{
		result = "FAIL";
	}
	else
	{
		writer = new PrintWriter(filePath);
		writer.println(name);
		writer.println(sex);
		writer.println(age);
		writer.print(phone);

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

response.sendRedirect("index.jsp?check=" + result);
%>