<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<% 
request.setCharacterEncoding("UTF-8");

String result = null;
String region = request.getParameter("region");
String temperature = request.getParameter("temperature");
String dust = request.getParameter("dust");
String rain = request.getParameter("rain");

PrintWriter writer = null;
PrintWriter temp = null;
String filePath= application.getRealPath("/JSP-ex/sub1/" + region + ".txt");
File f = new File(filePath);

try
{
	temp = response.getWriter();

	if(f.exists())
	{
		result = "FAIL";
	}
	else
	{
		writer = new PrintWriter(filePath);
		writer.println("<p id=area> " + region + " weather is <p>");
		writer.println("<p id=temp> " + temperature + " <p>");
		writer.println("<p id=dust> " + dust + " microdust<p>");
		writer.println("<p id=rain> " + rain + " rainfall probability<p>");

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
		temp.close();
	}
	catch(Exception e)
	{
		
	}
}

response.sendRedirect("main.jsp?check=" + result);
%>