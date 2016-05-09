<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<%
request.setCharacterEncoding("UTF-8");

String point = null;
String id = (String)session.getAttribute("id");
BufferedReader reader = null;
BufferedReader reader1 = null;
BufferedReader reader2 = null;
String one;
String two;

try
{
  	String filePath = application.getRealPath("/homework4/" + id + ".txt");
	File f = new File(filePath);

	reader = new BufferedReader(new FileReader(filePath));
	point = reader.readLine();
	point = reader.readLine();
	one = reader.readLine();
	two = reader.readLine();
	
	session.setAttribute("point", point);
	session.setAttribute("movieone", one);
	session.setAttribute("movietwo", two);
		
	String filePath1 = application.getRealPath("/homework4/h1.txt");
	File f1 = new File(filePath1);

	reader1 = new BufferedReader(new FileReader(filePath1));
	String onetemp = reader1.readLine();
	
	session.setAttribute("oneseat", onetemp);
	
	String filePath2 = application.getRealPath("/homework4/h2.txt");
	File f2 = new File(filePath2);

	reader2 = new BufferedReader(new FileReader(filePath2));
	String twotemp = reader2.readLine();
	
	session.setAttribute("twoseat", twotemp);
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
		reader1.close();
		reader2.close();
  	}
	catch(Exception e)
	{

   	}
}
%>

<html>

<head>
	<meta charset="UTF-8">
	<link type="text/css" rel="stylesheet" href="./loginTrue.css"/>
	
	<title>
		로그인 성공 시 페이지
	</title>

</head>

<% String temp = (String)session.getAttribute("id");
%>

<script>
	function point()
	{
		<%String getPoint = (String)session.getAttribute("point");%>
		<%String checkAdd = request.getParameter("result");%>
		<%String _one = (String)session.getAttribute("oneseat");%>
		<%String _two = (String)session.getAttribute("twoseat");%>
		
		var check = "<%=checkAdd%>";
		
		if(check=="FAIL")
		{
			window.alert("포인트 추가 에러!");
		}
		else if(check=="SUCCESS")
		{
			console.log(check);
			window.alert("포인트 추가에 성공했습니다!");
			var here = document.getElementById("point");
			here.innerHTML = <%=getPoint%>;
		}
		else if(check=="NO")
		{
			window.alert("0포인트를 추가할 수 없습니다!");
		}
	}
</script>

<body onload="point()">
	<form action="logout.jsp" method="POST">

		<p> <%=temp%> 님, 환영합니다.<input type="submit" value="Logout"></p>
	</form>

	<form action="buyPoint.jsp" method="POST">
		<p>
			<%=temp%> 님은 <p id="point"><%=getPoint%></p> 포인트를 가지고 있습니다.<br><br>
			현재 보유 포인트 : <input type="number" name="point" id="buy" height="50px" min="0" value="0"><input type="submit" value="buyPoint">
		</p>
	</form>
	
	<form action="reserve.jsp" method="POST">
	<div id="theater">
		<table>
			<tbody>
				<tr>
					<th colspan='5'>CGV</th>
				</tr>
				<tr>
					<td>영화관</td>
					<td>영화</td>
					<td>시간</td>
					<td>남은 좌석 수</td>
					<td>예약</td>
				</tr>
				<tr>
					<td>상영관 1</td>
					<td>madmax</td>
					<td>13:00 ~ 15:00</td>
					<td><span id="one"><%=_one%></span></td>
					<td><input type="number" name="one" width="25px" min="0" max="50" value="0"/></td>
				</tr>
				<tr>
					<td>상영관 2</td>
					<td>tommorrow</td>
					<td>16:00 ~ 18:00</td>
					<td><span id="two"><%=_two%></span></td>
					<td><input type="number" name="two" width="25px" min="0" max="50" value="0"/></td>
				</tr>
				<tr>
					<td colspan="5"><input type="submit" value="Reservation" width="200px"/></td>
				</tr>
		</table>
		</form>
	
		<form action="confirm.jsp" method="POST">
			<input type="submit" value="Confirm"/>
		</form>
	</div>

</body>
</html>