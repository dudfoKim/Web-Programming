<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<%
request.setCharacterEncoding("UTF-8");

String temp = null;
PrintWriter writer = null;
PrintWriter writer1 = null;
PrintWriter writer2 = null;
PrintWriter tempwriter = null;

String id = (String)session.getAttribute("id");
String password = (String)session.getAttribute("password");
String sessionPoint = (String)session.getAttribute("point");
String movieone = (String)session.getAttribute("movieone");
String movietwo = (String)session.getAttribute("movietwo");
int point = Integer.parseInt(sessionPoint);
int mone = Integer.parseInt(movieone);
int mtwo = Integer.parseInt(movietwo);

String sessionone = (String)session.getAttribute("oneseat");
String sessiontwo = (String)session.getAttribute("twoseat");
int oneseat = Integer.parseInt(sessionone);
int twoseat = Integer.parseInt(sessiontwo);

String tempOne = request.getParameter("one");
String tempTwo = request.getParameter("two");
int one = Integer.parseInt(tempOne);
int two = Integer.parseInt(tempTwo);

int result = one + two;
int ticket = 5000;
int resultone = oneseat - one;
int resulttwo = twoseat - two;

try
{
	tempwriter = response.getWriter();
			
	if(oneseat<0)
	{
		tempwriter.println("<script>alert('상영관 1에 대한 0개 이하의 좌석을 예약할 수 없습니다!');</script>");
		tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
	}
	else if(twoseat<0)
	{
		tempwriter.println("<script>alert('상영관 2에 대한 0개 이하의 좌석을 예약할 수 없습니다');</script>");
		tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
	}
	else if(result==0)
	{
		tempwriter.println("<script>alert('예약할 좌석을 선택하세요!');</script>");
		tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
	}
	else if(result*ticket > point)
	{
		tempwriter.println("<script>alert('포인트가 부족합니다!');</script>");
		tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
	}
	else
	{
		if(one>oneseat)
		{
			tempwriter.println("<script>alert('상영관1의 좌석보다 많은 좌석을 예약할 수 없습니다!');</script>");
			tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
		}
		else if(two>twoseat)
		{
			tempwriter.println("<script>alert('상영관 2에 대한 0개의 좌석을 예약할 수 없습니다!');</script>");
			tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
		}
		else
		{
			point -= ticket*result;
	
			tempwriter.println("<script>alert('좌석 예약에 성공했습니다!');</script>");

			String filePath = application.getRealPath("/homework4/" + id + ".txt");
			File f = new File(filePath);

			one += mone;
			two += mtwo;

			writer = new PrintWriter(f);
			writer.println(password);
			writer.println(point);
			writer.println(one);
			writer.println(two);
		
			session.setAttribute("point", String.valueOf(point));
			session.setAttribute("one", String.valueOf(resultone));
			session.setAttribute("two", String.valueOf(resulttwo));

			String filePath1 = application.getRealPath("/homework4/h1.txt");
			File f1 = new File(filePath1);		
			writer1 = new PrintWriter(f1);
			writer1.println(resultone);

			String filePath2 = application.getRealPath("/homework4/h2.txt");
			File f2 = new File(filePath2);		
			writer2 = new PrintWriter(f2);
			writer2.println(resulttwo);
		
			tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
		}
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
		writer.close();
		writer1.close();
		writer2.close();
}
%>