<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>

<%
request.setCharacterEncoding("UTF-8");

String result = null;
String temp = null;
String id = (String)session.getAttribute("id");
String password = (String)session.getAttribute("password");
PrintWriter writer = null;
int defaultPoint = 0;

String sessionPoint = (String)session.getAttribute("point");
String inputPoint = request.getParameter("point");
int realPoint = Integer.parseInt(inputPoint);
int originalPoint = Integer.parseInt(sessionPoint);

try
{
  	String filePath = application.getRealPath("/homework4/" + id + ".txt");
	File f = new File(filePath);
	
	if(f.exists()==true)
	{
		if(realPoint==0)
		{
			result = "NO";
		}
		else
		{
			originalPoint += realPoint;
			session.setAttribute("point", String.valueOf(originalPoint));

			writer = new PrintWriter(filePath);
			writer.println(password);
			writer.println(originalPoint);
			writer.println(defaultPoint);
			writer.println(defaultPoint);
	
			result = "SUCCESS";
		}
	}
	else
	{
		result = "FAIL";
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
		writer.close();
  	}
	catch(Exception e)
	{
   
   	}
}

response.sendRedirect("loginTrue.jsp?result=" + result);
%>