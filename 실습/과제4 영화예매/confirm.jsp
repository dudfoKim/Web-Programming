<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="java.io.*"%>
<%
request.setCharacterEncoding("UTF-8");

PrintWriter tempwriter = null;
String _one = (String)session.getAttribute("oneseat");
String _two = (String)session.getAttribute("twoseat");
String temp = (String)session.getAttribute("id");
String getone = (String)session.getAttribute("movieone");
String gettwo = (String)session.getAttribute("movietwo");

int realone = Integer.parseInt(_one);
int realtwo = Integer.parseInt(_two);
int resultone = 50 - realone;
int resulttwo = 50 - realtwo;
int checkone = Integer.parseInt(getone);
int checktwo = Integer.parseInt(gettwo);
int check = checkone + checktwo;

if(check==0)
{
	tempwriter = response.getWriter();
	tempwriter.println("<script>alert('0개의 좌석이므로 확인할 수 없습니다!');</script>");
	tempwriter.println("<script>location.href = 'loginTrue.jsp';</script>");
	tempwriter.close();
}
%>

<script>
	function goReserve()
	{
		location.href = "loginTrue.jsp";
	}
</script>

<body onload>
	<link type="text/css" rel="stylesheet" href="./loginTrue.css"/>
	<form action="logout.jsp" method="POST">
		<p> <%=temp%> 님 환영합니다.<input type="submit" value="Logout"></p>
	</form>

	<form action="cancel.jsp" method="POST">
	<div id="theater">
		<table>
			<tbody>
				<tr>
					<th colspan='5'>예약 확인</th>
				</tr>
				<tr>
					<td>상영관</td>
					<td>영화</td>
					<td>시간</td>
					<td>예약 좌석갯수</td>
					<td>예매 취소</td>
				</tr>
				<tr>
					<td>상영관 1</td>
					<td>madmax</td>
					<td>13:00 ~ 15:00</td>
					<td><span id="one"><%=resultone%></span></td>
					<td><input type="checkbox" name="cancelone" value="one" width="25px"/></td>
				</tr>
				<tr>
					<td>상영관 2</td>
					<td>tommorrow</td>
					<td>16:00 ~ 18:00</td>
					<td><span id="two"><%=resulttwo%></span></td>
					<td><input type="checkbox" name="canceltwo" value="two" width="25px"/></td>
				</tr>
				<tr>
					<td colspan="5"><input type="submit" value="cancel" width="200px"/></td>
				</tr>
		</table>
		</form>
	
		<input type="button" value="Go reservation" onclick="goReserve()"/>
	</div>

</body>
</html>