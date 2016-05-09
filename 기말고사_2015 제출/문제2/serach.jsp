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
		tempwriter.println("<script>alert('You can't make the file! file title Duplicate)');</script>");
	}
	else
	{
		writer = new PrintWriter(filePath);
		writer.println("<p id=area> " + region + "weather is <p>");
		writer.println("<p id=temp> " + temperature + "<p>");
		writer.println("<p id=dust> " + dust + "microdust<p>");
		writer.println("<p id=rain> " + rain + "rainfall probability<p>");
		
		tempwriter.println("<script>alert('Saved weather information in server!');</script>");
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