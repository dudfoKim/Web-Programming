<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>

<%
request.setCharacterEncoding("UTF-8");

PrintWriter writer = null;
PrintWriter writer1 = null;
PrintWriter writer2 = null;
PrintWriter tempwriter = null;

String cancelone = request.getParameter("cancelone");
String canceltwo = request.getParameter("canceltwo");

String id = (String)session.getAttribute("id");
String password = (String)session.getAttribute("password");
String sessionPoint = (String)session.getAttribute("point");
String movieone = (String)session.getAttribute("movieone");
String movietwo = (String)session.getAttribute("movietwo");
int mone = Integer.parseInt(movieone);
int mtwo = Integer.parseInt(movietwo);
int point = Integer.parseInt(sessionPoint);

String sessionone = (String)session.getAttribute("oneseat");
String sessiontwo = (String)session.getAttribute("twoseat");
int oneseat = Integer.parseInt(sessionone);
int twoseat = Integer.parseInt(sessiontwo);

int zero = 0;
int fifty = 50;
int ticket = 5000;

try
{
	tempwriter = response.getWriter();

	String filePath = application.getRealPath("/homework4/" + id + ".txt");
	File f = new File(filePath);

	if(cancelone!=null)
	{
		if(mone>0)
		{
			point += ticket * mone;

			writer = new PrintWriter(f);
			writer.println(password);
			writer.println(point);
			writer.println(zero);
			writer.println(mtwo);

			String filePath1 = application.getRealPath("/homework4/h1.txt");
			File f1 = new File(filePath1);		
			writer1 = new PrintWriter(f1);
			writer1.println(fifty);

			session.setAttribute("point", String.valueOf(point));
			session.setAttribute("one", String.valueOf(zero));
			session.setAttribute("movieone", String.valueOf(zero));
			
			tempwriter.println("<script>alert('상영관 1의 영화에 대해 성공적으로 예매를 취소했습니다!');</script>");
			tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
			
			writer.close();
			writer1.close();
			tempwriter.close();
		}
	}
	if(canceltwo!=null)
	{
		if(mtwo>0)
		{
			point += ticket * mtwo;

			writer = new PrintWriter(f);
			writer.println(password);
			writer.println(point);
			writer.println(mone);
			writer.println(zero);

			String filePath2 = application.getRealPath("/homework4/h2.txt");
			File f2 = new File(filePath2);
			writer2 = new PrintWriter(f2);
			writer2.println(fifty);
		
			session.setAttribute("point", String.valueOf(point));
			session.setAttribute("two", String.valueOf(zero));
			session.setAttribute("movietwo", String.valueOf(zero));
			
		
			tempwriter.println("<script>alert('상영관 2의 영화에 대해 성공적으로 예매를 취소했습니다!');</script>");
			tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
			
			writer.close();
			writer2.close();
			tempwriter.close();
		}
	}
	else
	{
		tempwriter.println("<script>alert('예매 취소 에러입니다!');</script>");
		tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
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
%>